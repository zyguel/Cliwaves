import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  return (
    <div>
     {/* Favorite */}
     <div>
        <h1>My Location</h1>
        <Button>
          <RefreshCw />
        </Button>
     </div>
     {/* Current and Hourly weather */ }
    </div>
   
   
  )
}

export default WeatherDashboard;