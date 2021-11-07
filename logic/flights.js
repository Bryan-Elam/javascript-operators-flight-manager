function Flights() {
        function calculateNumberOfFlights(passengers, capacity) {
           let flights;

           if ((passengers < 0 || (!Number.isInteger(passengers)))) {
               throw new Error("Number of passengers must be a positive integer");
           }

           if ((capacity < 0 || (!Number.isInteger(capacity)))) {
               throw new Error("Flight capacity must be a positive integer");
           }
           
           if(passengers % capacity === 0) {
               flights = passengers / capacity;
           }
           else {
               flights = Math.floor(passengers / capacity) + 1;
           }
           return flights;
        }

        function checkAircraftRevision(distanceLimit, distanceArray) {
            let totalDistance = 0;
            let distance;
            for(distance of distanceArray) {
                totalDistance += distance;
                }
                if (totalDistance > distanceLimit) {
                    throw new Error("Flight maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer");
                }
            
                if (totalDistance < distanceLimit/2) {
                    return "The revision needs to be done within the next 3 months";
                } else if (totalDistance < distanceLimit/4) {
                    return "The revision needs to be done within the next 2 months";
                } else {
                    return "The revision needs to be done within the next month";
                }
            }
            
            
            
        
       return (calculateNumberOfFlights, checkAircraftRevision);
    }

module.exports = Flights;


