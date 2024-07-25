import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import useFetch from '../../hooks/useFetch';

global.fetch = jest.fn();

describe('Tests for useFetch', () => {
     afterEach(() => {
          jest.clearAllMocks();
     });

     //Basic test for successful fetch
     it('should return data on successful fetch', async () => {
          const mockData = { message: 'Success' };
          (fetch as jest.Mock).mockResolvedValueOnce({
               ok: true,
               json: async () => mockData,
          });

          const { result } = renderHook(() =>
               useFetch('https://api.example.com/data'),
          );

          await waitFor(() => expect(result.current.loading).toBe(false));

          expect(result.current.error).toBe(null);
          expect(result.current.data).toEqual(mockData);
     });

     //Basic test for successful fetch
     it('should handle fetch errors', async () => {
          (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));

          const { result } = renderHook(() =>
               useFetch('https://api.example.com/data'),
          );

          await waitFor(() => expect(result.current.loading).toBe(false));

          expect(result.current.error).toBe('Fetch error');
          expect(result.current.data).toBe(null);
     });

     //Test for simultaneous fetch requests
     it('should handle multiple fetch requests', async () => {
          const mockData1 = { message: 'First fetch' };
          const mockData2 = { message: 'Second fetch' };

          (fetch as jest.Mock)
               .mockResolvedValueOnce({
                    ok: true,
                    json: async () => mockData1,
               })
               .mockResolvedValueOnce({
                    ok: true,
                    json: async () => mockData2,
               });

          const { result: result1 } = renderHook(() =>
               useFetch('https://api.example.com/data1'),
          );

          await waitFor(() => expect(result1.current.data).toEqual(mockData1));

          const { result: result2 } = renderHook(() =>
               useFetch('https://api.example.com/data2'),
          );

          await waitFor(() => expect(result2.current.data).toEqual(mockData2));
     });
});
