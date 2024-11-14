import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const WeatherDashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { 
    coordinates, 
    error: locationError, 
    getLocation, 
    isLoading: locationLoading,
  } = useGeolocation();

  const handleRefresh = () => {
    setIsRefreshing(true);
    getLocation();
    if (coordinates) {
      // reload weather data
    }
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };
  if(locationLoading){
    return <WeatherSkeleton />
  } 
  return (
    <div className="space-y-4">
     {/* Favorite */}
     <div className="flex items-center justify-between">
        <h1 className="text-x1 font-bold tracking-tight">My Location</h1>
        <Button variant={'outline'}
          size={"icon"}
           onClick={handleRefresh}
           className={`transition-transform delay-700 ${isRefreshing ? 'rotate-180' : ''}`}
          // disabled={}
        >
          <RefreshCw className="h-4 w-4"/>
        </Button>
     </div>
     {/* Current and Hourly weather */ }
    </div>
   
   
  )
}

export default WeatherDashboard;