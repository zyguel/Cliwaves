import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import  Layout  from './components/layout.tsx';
import { ThemeProvider } from "./context/theme-provider.tsx";
import WeatherDashboard from './pages/weather_dashboard.tsx';
import { CityPage } from './pages/city_page.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  useEffect(() => {
    document.title = 'Cliwaves';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />

            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      {/*<ReactQueryDevtools initialIsOpen={false}/>*/}
    </QueryClientProvider>
  );
}

export default App
