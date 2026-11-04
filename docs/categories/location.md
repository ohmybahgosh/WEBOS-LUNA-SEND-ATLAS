# Location

21 methods.  [Back to index](../../README.md#categories)

| URI | Access | Description |
|---|---|---|
| [`luna://com.palm.location/getCurrentPosition`](../services/com.palm.location.md#getcurrentposition) | root | Gets current position |
| [`luna://com.palm.location/setAutoLocate`](../services/com.palm.location.md#setautolocate) | root | Enables auto locate |
| [`luna://com.palm.location/setUseGps`](../services/com.palm.location.md#setusegps) | root | Enables GPS use |
| [`luna://com.webos.service.location/bounds`](../services/com.webos.service.location.md#bounds) | unknown | Indicates the bounding box of the viewport within which to bias geocode results more prominently. |
| [`luna://com.webos.service.location/components`](../services/com.webos.service.location.md#components) | unknown | Indicates the component filter for which a geocode has to be generated. |
| [`luna://com.webos.service.location/getAllLocationHandlers`](../services/com.webos.service.location.md#getalllocationhandlers) | public | Gets a list of the available location handlers, along with each handler's attributes including name and state. |
| [`luna://com.webos.service.location/getGeoCodeLocation`](../services/com.webos.service.location.md#getgeocodelocation) | public | Transforms a given street address or other description of a location into a coordinate (latitude, longitude). Important points: Supports Google Geocoding API. P |
| [`luna://com.webos.service.location/getGpsSatelliteData`](../services/com.webos.service.location.md#getgpssatellitedata) | public | Gets the satellite information. Prerequisite : The GPS feature of the device has to be powered ON . |
| [`luna://com.webos.service.location/getGpsStatus`](../services/com.webos.service.location.md#getgpsstatus) | public | Gets the current status of the GPS engine. Used for notifying device users that the GPS engine has started or stopped. GPS engine is started when a method that  |
| [`luna://com.webos.service.location/getLocationHandlerDetails`](../services/com.webos.service.location.md#getlocationhandlerdetails) | public | Gets the details of the given location handler (Location service provider). |
| [`luna://com.webos.service.location/getLocationUpdates`](../services/com.webos.service.location.md#getlocationupdates) | public | Requests a single location fix based on the given criteria. If the subscription value is set to true, it requests for continuous location fixes. Note: Timeout p |
| [`luna://com.webos.service.location/getNmeaData`](../services/com.webos.service.location.md#getnmeadata) | public | Gets a NMEA sentence from a GPS receiver. |
| [`luna://com.webos.service.location/getReverseLocation`](../services/com.webos.service.location.md#getreverselocation) | public | Transforms a given coordinate (latitude, longitude) into a (partial) address. Note: The amount of detail in a reverse geocoded location description may vary. Fo |
| [`luna://com.webos.service.location/getState`](../services/com.webos.service.location.md#getstate) | public | Gets the current state of the given handler. Application settings can use this to update location settings. |
| [`luna://com.webos.service.location/handler`](../services/com.webos.service.location.md#handler) | unknown | Contains a handler's name and state. |
| [`luna://com.webos.service.location/location`](../services/com.webos.service.location.md#location) | unknown | Indicates the object of location for mock. |
| [`luna://com.webos.service.location/mock/disable`](../services/com.webos.service.location.md#mock_disable) | public | Disables the mock location of the given provider. |
| [`luna://com.webos.service.location/mock/enable`](../services/com.webos.service.location.md#mock_enable) | public | Enables a mock location of the given provider. |
| [`luna://com.webos.service.location/mock/setLocation`](../services/com.webos.service.location.md#mock_setlocation) | public | Sets a mock location for the given provider. |
| [`luna://com.webos.service.location/satellite`](../services/com.webos.service.location.md#satellite) | unknown | Contains satellite information. |
| [`luna://com.webos.service.location/setState`](../services/com.webos.service.location.md#setstate) | public | Enables or disables a location service provider in the setting menu. |
