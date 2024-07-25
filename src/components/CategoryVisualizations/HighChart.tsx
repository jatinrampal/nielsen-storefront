import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import { TextField, MenuItem, Paper, Box } from '@mui/material';

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

//Highchart Component
const HighChart: React.FC<ProductChartProps> = ({ productData }) => {
     //Variable to manage state of selected metric
     const [metric, setMetric] = useState<'price' | 'rating'>('price');

     //Refs for Chart and ChartInstance
     const chartRef = useRef<HTMLDivElement | null>(null);
     const chartInstanceRef = useRef<Highcharts.Chart | null>(null);

     //Handler for metric change
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

               //Destroying previous chart as per best practices
               if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
               }

               //Initialising chart instance
               chartInstanceRef.current = Highcharts.chart(chartRef.current, {
                    chart: {
                         type: 'column',
                         style: {
                              fontFamily: 'Avenir',
                         },
                    },
                    title: { text: 'Product Comparison' },
                    xAxis: { type: 'category', title: { text: 'Product' } },
                    yAxis: {
                         title: {
                              text:
                                   metric.charAt(0).toUpperCase() +
                                   metric.slice(1),
                         },
                    },
                    series: [{ name: 'Products', data: chartData }],
                    colors: ['#B3E5FC'],
               } as Highcharts.Options);
          }
     }, [productData, metric]);

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
                    label="Metric"
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
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
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
