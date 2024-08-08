import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import { TextField, MenuItem, Paper, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// Interface for Product data
interface Product {
     title: string;
     price: number;
     rating: {
          rate: number;
     };
}

// Interface for high chart component
interface ProductChartProps {
     productData: Product[];
}

// Highchart Component
const HighChart: React.FC<ProductChartProps> = ({ productData }) => {
     const { t } = useTranslation();
     // Variable to manage state of selected metric
     const [metric, setMetric] = useState<'price' | 'rating'>('price');

     // Refs for Chart and ChartInstance
     const chartRef = useRef<HTMLDivElement | null>(null);
     const chartInstanceRef = useRef<Highcharts.Chart | null>(null);

     const theme = useTheme();

     // Handler for metric change
     const handleMetricChange = (
          event: React.ChangeEvent<HTMLInputElement>,
     ) => {
          setMetric(event.target.value as 'price' | 'rating');
     };

     useEffect(() => {
          if (productData.length > 0 && chartRef.current) {
               const chartData = productData.map((product) => ({
                    name: product.title,
                    y:
                         metric === 'price'
                              ? product.price
                              : product.rating?.rate,
               }));

               // Destroying previous chart as per best practices
               if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
               }

               const textStyle = {
                    fontFamily: 'Avenir',
                    color: theme.palette.primary.main,
               };

               // Initialising chart instance
               chartInstanceRef.current = Highcharts.chart(chartRef.current, {
                    chart: {
                         type: 'column',
                         style: textStyle,
                         backgroundColor: theme.palette.background.default,
                    },
                    title: {
                         text: t('chartTitle'),
                         style: textStyle,
                    },
                    xAxis: {
                         type: 'category',
                         title: {
                              text: t('productLabel'),
                              style: textStyle,
                         },
                         labels: {
                              style: textStyle,
                         },
                    },
                    yAxis: {
                         title: {
                              text: t(`metric.${metric}`),
                              style: textStyle,
                         },
                         labels: {
                              style: textStyle,
                         },
                    },
                    legend: {
                         itemStyle: textStyle,
                    },
                    series: [
                         {
                              name: t('productsSeriesName'),
                              data: chartData,
                         },
                    ],
                    colors: [theme.palette.secondary.main],
               } as Highcharts.Options);
          }
     }, [productData, metric, theme, t]);

     return (
          <Paper
               style={{
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
               }}
          >
               {/* Dropdown for metric */}
               <TextField
                    select
                    label={t('metricLabel')}
                    value={metric}
                    onChange={handleMetricChange}
                    style={{
                         position: 'absolute',
                         top: '5px',
                         right: '16px',
                         width: '120px',
                         zIndex: 10,
                    }}
                    data-testid="metric-select"
               >
                    <MenuItem value="price">{t('price')}</MenuItem>{' '}
                    <MenuItem value="rating">{t('rating')}</MenuItem>{' '}
               </TextField>
               <Box
                    ref={chartRef}
                    style={{ height: '400px' }}
                    data-testid="chart-container"
               />
          </Paper>
     );
};

export default HighChart;
