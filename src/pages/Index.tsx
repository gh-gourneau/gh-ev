
import { MapPin, Zap, Clock, Users, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Guardant Health EV Charging</h1>
          </div>
          <p className="text-sm text-gray-600 mt-1">For Guardant Health employees only</p>
        </div>
      </header>

      {/* Map Section */}
      <section className="px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Charging Station Locations</h2>
            </div>
          </div>
          
          {/* Embedded Google Map */}
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1kCzRU-JOFCA9q3caR1iC4BTEau3YoWA&ehbc=2E312F" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EV Charging Station Map"
            />
          </div>
          
          <div className="p-4">
            <a 
              href="https://www.google.com/maps/d/u/0/edit?mid=1kCzRU-JOFCA9q3caR1iC4BTEau3YoWA&usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              View Full Map & Details
            </a>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-900">How to Use ChargePoint</h2>
          </div>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-3 w-3 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Join the Waitlist When Chargers Are Full</h3>
                <p className="text-sm text-gray-600">
                  If all charging stations are in use, you can join the waitlist through the ChargePoint app. 
                  Look for the "Join Waitlist" button. The app will notify you when it's your turn.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-3 w-3 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">4-Hour Limit & Full Charge Policy</h3>
                <p className="text-sm text-gray-600">
                  If a vehicle is either fully charged or has been plugged in for more than 4 hours, 
                  the driver will be asked to move it to make room for others waiting to charge. 
                  They have 60 minutes to move their car.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-3 w-3 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Respond Quickly When It's Your Turn</h3>
                <p className="text-sm text-gray-600">
                  Once a spot opens up and you're next on the waitlist, you'll receive a notification. 
                  You'll have 60 minutes to move your vehicle to the specific charging location assigned 
                  to you in the app. Be sure to plug in only at the designated spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Information */}
      <section className="px-4 py-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Need Access?</h2>
          <p className="text-sm text-blue-800 mb-3">
            Only Guardant Health employees can charge here. For information about how to sign up 
            and get access to the charging stations, visit our internal portal.
          </p>
          <a 
            href="https://guardanthealth-intranet--simpplr.vf.force.com/apex/simpplr__app?u=/site/a148d000000l35jAAA/page/a128d000000QKDbAAO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Sign Up Information (Internal)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center">
        <p className="text-xs text-gray-500">
          Thanks for helping keep the system running smoothly for everyone!
        </p>
      </footer>
    </div>
  );
};

export default Index;
