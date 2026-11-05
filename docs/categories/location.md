# Location

21 methods.  [Back to index](../../README.md#categories)

| URI | Access | Conf | Description |
|---|---|---|---|
| [`luna://com.palm.location/getCurrentPosition`](../services/com.palm.location.md#getcurrentposition) | root | documented | Gets current position |
| [`luna://com.palm.location/setAutoLocate`](../services/com.palm.location.md#setautolocate) | root | documented | Enables auto locate |
| [`luna://com.palm.location/setUseGps`](../services/com.palm.location.md#setusegps) | root | documented | Enables GPS use |
| [`luna://com.webos.service.location/bounds`](../services/com.webos.service.location.md#bounds) | unknown | documented | Indicates the bounding box of the viewport within which to bias geocode results more prominently. |
| [`luna://com.webos.service.location/components`](../services/com.webos.service.location.md#components) | unknown | documented | Indicates the component filter for which a geocode has to be generated. |
| [`luna://com.webos.service.location/getAllLocationHandlers`](../services/com.webos.service.location.md#getalllocationhandlers) | public | documented | Gets a list of the available location handlers, along with each handler's attributes including name and state. |
| [`luna://com.webos.service.location/getGeoCodeLocation`](../services/com.webos.service.location.md#getgeocodelocation) | public | documented | Transforms a given street address or other description of a location into a coordinate (latitude, longitude). Important points: Supports Google Geocoding API. P |
| [`luna://com.webos.service.location/getGpsSatelliteData`](../services/com.webos.service.location.md#getgpssatellitedata) | public | documented | Gets the satellite information. Prerequisite : The GPS feature of the device has to be powered ON . |
| [`luna://com.webos.service.location/getGpsStatus`](../services/com.webos.service.location.md#getgpsstatus) | public | documented | Gets the current status of the GPS engine. Used for notifying device users that the GPS engine has started or stopped. GPS engine is started when a method that  |
| [`luna://com.webos.service.location/getLocationHandlerDetails`](../services/com.webos.service.location.md#getlocationhandlerdetails) | public | documented | Gets the details of the given location handler (Location service provider). |
| [`luna://com.webos.service.location/getLocationUpdates`](../services/com.webos.service.location.md#getlocationupdates) | public | documented | Requests a single location fix based on the given criteria. If the subscription value is set to true, it requests for continuous location fixes. Note: Timeout p |
| [`luna://com.webos.service.location/getNmeaData`](../services/com.webos.service.location.md#getnmeadata) | public | documented | Gets a NMEA sentence from a GPS receiver. |
| [`luna://com.webos.service.location/getReverseLocation`](../services/com.webos.service.location.md#getreverselocation) | public | documented | Transforms a given coordinate (latitude, longitude) into a (partial) address. Note: The amount of detail in a reverse geocoded location description may vary. Fo |
| [`luna://com.webos.service.location/getState`](../services/com.webos.service.location.md#getstate) | public | documented | Gets the current state of the given handler. Application settings can use this to update location settings. |
| [`luna://com.webos.service.location/handler`](../services/com.webos.service.location.md#handler) | unknown | documented | Contains a handler's name and state. |
| [`luna://com.webos.service.location/location`](../services/com.webos.service.location.md#location) | unknown | documented | Indicates the object of location for mock. |
| [`luna://com.webos.service.location/mock/disable`](../services/com.webos.service.location.md#mock_disable) | public | documented | Disables the mock location of the given provider. |
| [`luna://com.webos.service.location/mock/enable`](../services/com.webos.service.location.md#mock_enable) | public | documented | Enables a mock location of the given provider. |
| [`luna://com.webos.service.location/mock/setLocation`](../services/com.webos.service.location.md#mock_setlocation) | public | documented | Sets a mock location for the given provider. |
| [`luna://com.webos.service.location/satellite`](../services/com.webos.service.location.md#satellite) | unknown | documented | Contains satellite information. |
| [`luna://com.webos.service.location/setState`](../services/com.webos.service.location.md#setstate) | public | documented | Enables or disables a location service provider in the setting menu. |
