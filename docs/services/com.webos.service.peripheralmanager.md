# `com.webos.service.peripheralmanager`

Peripheral manager: monitors sensors and controls actuators on I/O peripherals over industry-standard buses, exposing GPIO and I2C (and similar) open, read, write and configure operations.

43 methods.  Platforms seen: webOS OSE.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`config`](#config) | unknown |  | input | documented | Configurations to be set for the opened UART Interface. |
| [`gpio/close`](#gpio_close) | public |  | input | documented | Closes the opened GPIO pin, so that the pin is available for other applications to use. |
| [`gpio/getDirection`](#gpio_getdirection) | public |  | input | documented | Returns the direction of the required GPIO pin. |
| [`gpio/getPollingFd`](#gpio_getpollingfd) | public |  | input | documented | Returns the file descriptor for the GPIO pin specified in the input. |
| [`gpio/getValue`](#gpio_getvalue) | public | yes | input | documented | Reads the value of the opened input pin |
| [`gpio/list`](#gpio_list) | public | yes | input | documented | Provides the list of available GPIO pins in the target hardware. |
| [`gpio/open`](#gpio_open) | public |  | input | documented | Opens the GPIO pin, if not already opened by other applications. |
| [`gpio/setDirection`](#gpio_setdirection) | public |  | input | documented | Sets the direction of the GPIO pin to input or output |
| [`gpio/setValue`](#gpio_setvalue) | public |  | input | documented | Sets the value of the opened output pin to "low" or "high" |
| [`gpioList`](#gpiolist) | unknown |  | input | documented | Provides the list of available GPIO pins with the status. |
| [`i2c/close`](#i2c_close) | public |  | input | documented | Closes the opened I2C device connected to the bus. |
| [`i2c/getPollingFd`](#i2c_getpollingfd) | public |  | input | documented | Returns the file descriptor for the I2c if specified in the input. |
| [`i2c/list`](#i2c_list) | public |  | input | documented | Provides the list of available I2C buses. |
| [`i2c/open`](#i2c_open) | public |  | input | documented | Opens the device connected to I2C bus. |
| [`i2c/read`](#i2c_read) | public |  | input | documented | Reads data from the I2C device. |
| [`i2c/readRegBuffer`](#i2c_readregbuffer) | public |  | input | documented | Reads a value from the register buffer. |
| [`i2c/readRegByte`](#i2c_readregbyte) | public |  | input | documented | Reads a byte from a given register of the I2C device. |
| [`i2c/readRegWord`](#i2c_readregword) | public |  | input | documented | Reads a word from the register of the i2c device. |
| [`i2c/write`](#i2c_write) | public |  | input | documented | Writes the data to the opened I2C device. |
| [`i2c/writeRegBuffer`](#i2c_writeregbuffer) | public |  | input | documented | Writes data to the register buffer of the connected I2C device. |
| [`i2c/writeRegByte`](#i2c_writeregbyte) | public |  | input | documented | Writes a byte from a given register. |
| [`i2c/writeRegWord`](#i2c_writeregword) | public |  | input | documented | Writes a word to the register of the I2C device. |
| [`i2cBusList`](#i2cbuslist) | unknown |  | input | documented | List of I2C buses and the slave address. |
| [`spi/close`](#spi_close) | public |  | input | documented | Closes the opened SPI bus, for other applications to use. |
| [`spi/list`](#spi_list) | public |  | input | documented | Provides the list of available SPI buses in the target hardware. |
| [`spi/open`](#spi_open) | public |  | input | documented | Opens the SPI bus, if not already opened by other applications. |
| [`spi/setBitJustification`](#spi_setbitjustification) | public |  | input | documented | Sets bit justification of the data transferred in the SPI bus i.e MSB-first or LSB-first |
| [`spi/setBitsPerWord`](#spi_setbitsperword) | public |  | input | documented | Configures the number of bits in each SPI transfer word. |
| [`spi/setDelay`](#spi_setdelay) | public |  | input | documented | Sets the delay after a transfer before the chip select status is changed and the next transfer is triggered. |
| [`spi/setFrequency`](#spi_setfrequency) | public |  | input | documented | Sets the rate of data transfer (Hz) |
| [`spi/setMode`](#spi_setmode) | public |  | input | documented | Sets modes that correspond to the possible clocking configurations. |
| [`spi/transfer`](#spi_transfer) | public |  | input | documented | Opens a connection for receiving/transmitting data to/from a particular slave device. |
| [`spi/writeBuffer`](#spi_writebuffer) | public |  | input | documented | Writes a chunk of data to SPI device. |
| [`spi/writeByte`](#spi_writebyte) | public |  | input | documented | Writes a byte of data to the SPI device connected to the bus. |
| [`uart/close`](#uart_close) | public |  | input | documented | Closes the opened UART device so that the interface is available for other apps to use. |
| [`uart/getBaudrate`](#uart_getbaudrate) | public |  | input | documented | Reads the baud rate of the opened UART device. |
| [`uart/getPollingFd`](#uart_getpollingfd) | public |  | input | documented | Returns the file descriptor for the UART interface specified in the input. |
| [`uart/list`](#uart_list) | public | yes | input | documented | Provides the list of available UART interfaces in the target hardware. |
| [`uart/open`](#uart_open) | public |  | input | documented | Opens the UART interface, if not already opened by other applications. |
| [`uart/read`](#uart_read) | public |  | input | documented | Reads the data from the opened UART device. |
| [`uart/setBaudrate`](#uart_setbaudrate) | public |  | input | documented | Sets the baud rate of the opened UART device to the required value. |
| [`uart/write`](#uart_write) | public |  | input | documented | Writes the data to the opened UART device. |
| [`uartList`](#uartlist) | unknown |  | input | documented | Provide List of UART interfaces along with the status |

<a id="config"></a>
## `config`

`luna://com.webos.service.peripheralmanager/config`

Configurations to be set for the opened UART Interface.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/config '{}'
```

> Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_close"></a>
## `gpio/close`

`luna://com.webos.service.peripheralmanager/gpio/close`

Closes the opened GPIO pin, so that the pin is available for other applications to use.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (required) ID of the pin. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/close '{"pin":"gpio4"}
```

> ACG: peripheralmanager.gpio.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_getdirection"></a>
## `gpio/getDirection`

`luna://com.webos.service.peripheralmanager/gpio/getDirection`

Returns the direction of the required GPIO pin.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (required) ID of the pin. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `direction` | String (optional) Indicates the direction of the pin. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/getDirection '{"pin":"gpio4"}
```

> ACG: peripheralmanager.query \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; direction:String \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_getpollingfd"></a>
## `gpio/getPollingFd`

`luna://com.webos.service.peripheralmanager/gpio/getPollingFd`

Returns the file descriptor for the GPIO pin specified in the input.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the pin. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation |
| `fd` | String (optional) File descriptor of the interface. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/getPollingFd '{"id" : "gpio4"}
```

> ACG: peripheralmanager.gpio.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; fd:String \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_getvalue"></a>
## `gpio/getValue`

`luna://com.webos.service.peripheralmanager/gpio/getValue`

Reads the value of the opened input pin

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (required) ID of the pin. |
| `subscribe` | Boolean (optional) Indicates if subscribed to get notified when there is a change in value. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default : false |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `value` | String (optional) Indicates the value. Possible values are: "low" or "high". |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/getValue '{"pin":"gpio4"}
```

> ACG: peripheralmanager.gpio.operation \| Returns: errorText:String; errorCode:Number; subscribed:Boolean; value:String; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_list"></a>
## `gpio/list`

`luna://com.webos.service.peripheralmanager/gpio/list`

Provides the list of available GPIO pins in the target hardware.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notified when there is a change in available pins. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default : false |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `gpioList` | Object array: gpioList (optional) List of available GPIO pins with the status. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/list '{}
```

> ACG: peripheralmanager.query \| Returns: errorText:String; errorCode:Number; subscribed:Boolean; gpioList:Object array: gpioList; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_open"></a>
## `gpio/open`

`luna://com.webos.service.peripheralmanager/gpio/open`

Opens the GPIO pin, if not already opened by other applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (required) ID of the pin. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/open ' {"pin":"gpio4"}
```

> ACG: peripheralmanager.gpio.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_setdirection"></a>
## `gpio/setDirection`

`luna://com.webos.service.peripheralmanager/gpio/setDirection`

Sets the direction of the GPIO pin to input or output

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (required) ID of the pin. |
| `direction` | String (required) Direction of the pin. Possible values are: "in", "outLow", "outHigh" |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/setDirection ' {"pin":"gpio4", "direction":"outHigh"}
```

> ACG: peripheralmanager.gpio.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpio_setvalue"></a>
## `gpio/setValue`

`luna://com.webos.service.peripheralmanager/gpio/setValue`

Sets the value of the opened output pin to "low" or "high"

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `pin` | String (required) ID of the pin. |
| `value` | String (required) Value of the output pin. Possible values are: "low" or "high". |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpio/setValue ' {"pin":"gpio4", "value":"low"}
```

> ACG: peripheralmanager.gpio.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="gpiolist"></a>
## `gpioList`

`luna://com.webos.service.peripheralmanager/gpioList`

Provides the list of available GPIO pins with the status.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/gpioList '{}'
```

> Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_close"></a>
## `i2c/close`

`luna://com.webos.service.peripheralmanager/i2c/close`

Closes the opened I2C device connected to the bus.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device to be closed, which is connected to the I2C bus. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/close '{"name":"I2C1", "address":104}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_getpollingfd"></a>
## `i2c/getPollingFd`

`luna://com.webos.service.peripheralmanager/i2c/getPollingFd`

Returns the file descriptor for the I2c if specified in the input.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C pin. |
| `address` | Number (required) Address of the I2C device connected to the interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `fd` | String (optional) File descriptor of the interface. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/getPollingFd '{"name" : "I2C1", "address" :104}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; fd:String \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_list"></a>
## `i2c/list`

`luna://com.webos.service.peripheralmanager/i2c/list`

Provides the list of available I2C buses.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `verbose` | Boolean (optional) Provide a list of I2C buses with slaveAddress and more details. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `i2cList` | String array (optional) List of I2C buses. If verbose input parameter is set, also returns the slave address. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/list '{}
```

> ACG: peripheralmanager.query \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; i2cList:String array \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_open"></a>
## `i2c/open`

`luna://com.webos.service.peripheralmanager/i2c/open`

Opens the device connected to I2C bus.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device to be opened, which is connected to the I2C bus |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/open '{"name":"I2C1", "address":104}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_read"></a>
## `i2c/read`

`luna://com.webos.service.peripheralmanager/i2c/read`

Reads data from the I2C device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C device. |
| `address` | String (required) Address of the device that is being used. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `size` | Number (optional) Size of the data read. |
| `data` | Object array (optional) Data read from the device. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/read '{"name":"I2C1", "address":104, "size":4}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; size:Number; data:Object array \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_readregbuffer"></a>
## `i2c/readRegBuffer`

`luna://com.webos.service.peripheralmanager/i2c/readRegBuffer`

Reads a value from the register buffer.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `reg` | Number (required) Register address. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `data` | Object array (optional) Data read. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/readRegBuffer '{"name":"I2C1", "address":104, "reg":0, "size":4}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; data:Object array \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_readregbyte"></a>
## `i2c/readRegByte`

`luna://com.webos.service.peripheralmanager/i2c/readRegByte`

Reads a byte from a given register of the I2C device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `reg` | Number (required) Register address. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `data` | Number (optional) Read value from the register. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/readRegByte '{"name":"I2C1","address":104, "reg":0}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; data:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_readregword"></a>
## `i2c/readRegWord`

`luna://com.webos.service.peripheralmanager/i2c/readRegWord`

Reads a word from the register of the i2c device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `reg` | Number (required) Register address. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `data` | Number (optional) Read value from the register. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/readRegWord '{"name":"I2C1","address":104, "reg":0}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; data:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_write"></a>
## `i2c/write`

`luna://com.webos.service.peripheralmanager/i2c/write`

Writes the data to the opened I2C device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `data` | Object array (required) Data to be written. |
| `size` | Number (optional) Size of data to be written. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `size` | Number (optional) Bytes written. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/write '{"name":"I2C1", "address":104, "data":[1,2,3,4]}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; size:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_writeregbuffer"></a>
## `i2c/writeRegBuffer`

`luna://com.webos.service.peripheralmanager/i2c/writeRegBuffer`

Writes data to the register buffer of the connected I2C device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `reg` | Number (required) Register address. |
| `data` | Object array (required) Data that needs to be written. |
| `size` | Number (required) Size of the data. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `size` | Number (required) Bytes to be written into register. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/writeRegBuffer '{"name":"I2C1", "address":104, "reg":0, "data":[1,2,3,4]}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; size:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_writeregbyte"></a>
## `i2c/writeRegByte`

`luna://com.webos.service.peripheralmanager/i2c/writeRegByte`

Writes a byte from a given register.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `reg` | Number (required) Register address. |
| `data` | Number (required) Data to write into register. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/writeRegByte '{"name":"I2C1", "address":104, "reg":0, "data":22}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2c_writeregword"></a>
## `i2c/writeRegWord`

`luna://com.webos.service.peripheralmanager/i2c/writeRegWord`

Writes a word to the register of the I2C device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) Name of the I2C interface. |
| `address` | Number (required) Address of the I2C device connected to the interface. |
| `reg` | Number (required) Register address. |
| `data` | Number (required) Data to write into register. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2c/writeRegWord '{"name":"I2C1","address":104, "reg":0, "data":1111}
```

> ACG: peripheralmanager.i2c.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="i2cbuslist"></a>
## `i2cBusList`

`luna://com.webos.service.peripheralmanager/i2cBusList`

List of I2C buses and the slave address.

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/i2cBusList '{}'
```

> Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_close"></a>
## `spi/close`

`luna://com.webos.service.peripheralmanager/spi/close`

Closes the opened SPI bus, for other applications to use.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/close '{"name":"SPI00"}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_list"></a>
## `spi/list`

`luna://com.webos.service.peripheralmanager/spi/list`

Provides the list of available SPI buses in the target hardware.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `list` | String array (optional) List of available SPI buses. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/list '{}
```

> ACG: peripheralmanager.query \| Returns: errorText:String; errorCode:Number; list:String array; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_open"></a>
## `spi/open`

`luna://com.webos.service.peripheralmanager/spi/open`

Opens the SPI bus, if not already opened by other applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI bus interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/open '{"name" :"SPI00"}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_setbitjustification"></a>
## `spi/setBitJustification`

`luna://com.webos.service.peripheralmanager/spi/setBitJustification`

Sets bit justification of the data transferred in the SPI bus i.e MSB-first or LSB-first

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `lsb_first` | Boolean (required) Bit Justification for the data transfer ( true = LSB-first, false* = MSB-first) |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/setBitJustification '{"name":"SPI00", "lsb_first": false}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_setbitsperword"></a>
## `spi/setBitsPerWord`

`luna://com.webos.service.peripheralmanager/spi/setBitsPerWord`

Configures the number of bits in each SPI transfer word.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `nbits` | Number (required) Setting up bit PerWord. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/setBitsPerWord '{"name":"SPI00", "nbits":8}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_setdelay"></a>
## `spi/setDelay`

`luna://com.webos.service.peripheralmanager/spi/setDelay`

Sets the delay after a transfer before the chip select status is changed and the next transfer is triggered.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `delay_usecs` | Number (required) Delay time in micro seconds. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/setDelay '{"name":"SPI00", "delay_usecs":0}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_setfrequency"></a>
## `spi/setFrequency`

`luna://com.webos.service.peripheralmanager/spi/setFrequency`

Sets the rate of data transfer (Hz)

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `frequency` | Number (required) Setting the frequency of the bus upto value that is allowed based on the bus max speed |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/setFrequency '{"name":"SPI00", "frequency":9600}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_setmode"></a>
## `spi/setMode`

`luna://com.webos.service.peripheralmanager/spi/setMode`

Sets modes that correspond to the possible clocking configurations.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `mode` | Number (required) Mode to be set for the SPI device (possible values: 0 to 3). |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/setMode '{"name":"SPI00", "mode":0}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_transfer"></a>
## `spi/transfer`

`luna://com.webos.service.peripheralmanager/spi/transfer`

Opens a connection for receiving/transmitting data to/from a particular slave device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `data` | Object array (optional) Data to be transferred to the SPI device. |
| `size` | Number (required) Size of the data to be written/read, if data field is not present. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `tx\_size` | Number (optional) Size of the data transferred to the SPI device. |
| `rx\_size` | Number (optional) Size of the data read from the SPI device. |
| `rx\_data` | Object array (optional) Receiving of the data from slave. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/transfer '{"name":"SPI00", "data":[1,2,3,4], "size":4}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; tx_size:Number; rx_size:Number; rx_data:Object array \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_writebuffer"></a>
## `spi/writeBuffer`

`luna://com.webos.service.peripheralmanager/spi/writeBuffer`

Writes a chunk of data to SPI device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `name` | String (required) ID of the SPI interface. |
| `data` | Object array (required) Data to be written to the SPI device. |
| `size` | Number (required) Size of the data. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `size` | Number (optional) Size of the data written to the device. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/writeBuffer '{"name":"SPI00", "data":[1,2,3,4]}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; size:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="spi_writebyte"></a>
## `spi/writeByte`

`luna://com.webos.service.peripheralmanager/spi/writeByte`

Writes a byte of data to the SPI device connected to the bus.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `data` | Number (required) Data to be written. |
| `name` | String (required) ID of the SPI interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/spi/writeByte '{"name":"SPI00", "data":10}
```

> ACG: peripheralmanager.spi.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_close"></a>
## `uart/close`

`luna://com.webos.service.peripheralmanager/uart/close`

Closes the opened UART device so that the interface is available for other apps to use.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interfaceId` | String (required) ID of the UART interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/close '{"interfaceId":"UART1"}
```

> ACG: peripheralmanager.uart.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_getbaudrate"></a>
## `uart/getBaudrate`

`luna://com.webos.service.peripheralmanager/uart/getBaudrate`

Reads the baud rate of the opened UART device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interfaceId` | String (required) ID of the UART interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `baudrate` | Number (optional) Value of the baud rate. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/getBaudrate '{"interfaceId":"UART1"}
```

> ACG: peripheralmanager.query \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; baudrate:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_getpollingfd"></a>
## `uart/getPollingFd`

`luna://com.webos.service.peripheralmanager/uart/getPollingFd`

Returns the file descriptor for the UART interface specified in the input.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `id` | String (required) ID of the UART interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `fd` | String (optional) File descriptor of the interface. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/getPollingFd '{"id" : "UART1"}
```

> ACG: peripheralmanager.uart.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; fd:String \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_list"></a>
## `uart/list`

`luna://com.webos.service.peripheralmanager/uart/list`

Provides the list of available UART interfaces in the target hardware.

- **Access:** public  
- **Subscribe:** yes  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `subscribe` | Boolean (optional) Indicates if subscribed to get notified when there is a change in available interfaces. Possible values are: true: Subscribed for notifications. false: Not subscribed. Default : false |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `uartList` | Object array: uartList (optional) List of available UART interfaces. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/list '{}
```

> ACG: peripheralmanager.query \| Returns: errorText:String; errorCode:Number; subscribed:String; uartList:Object array: uartList; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_open"></a>
## `uart/open`

`luna://com.webos.service.peripheralmanager/uart/open`

Opens the UART interface, if not already opened by other applications.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interfaceId` | String (required) ID of the UART interface. |
| `config` | Object: config (optional) The configurations to be set for the opened UART Interface. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/open '{"interfaceId":"UART1"}
```

> ACG: peripheralmanager.uart.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_read"></a>
## `uart/read`

`luna://com.webos.service.peripheralmanager/uart/read`

Reads the data from the opened UART device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interfaceId` | String (required) ID of the UART interface. |
| `dataType` | String (optional) The format of data to be returned. |
| `size` | Number (optional) Size of the data to be read. If not specified, all available data is read. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `data` | String (optional) Value read from the opened UART interface. |
| `dataType` | String (optional) Type of data in the data field. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/read '{"interfaceId":"ttyACM0", "dataType":"text"}
```

> ACG: peripheralmanager.uart.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; data:String; dataType:String \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_setbaudrate"></a>
## `uart/setBaudrate`

`luna://com.webos.service.peripheralmanager/uart/setBaudrate`

Sets the baud rate of the opened UART device to the required value.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interfaceId` | String (required) ID of the UART interface. |
| `baudrate` | Number (required) Value of the baud rate. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | String (optional) The error code for the failed operation. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/setBaudrate '{"interfaceId":"UART1", "baudrate":9600}
```

> ACG: peripheralmanager.uart.operation \| Returns: errorText:String; errorCode:String; returnValue:String \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uart_write"></a>
## `uart/write`

`luna://com.webos.service.peripheralmanager/uart/write`

Writes the data to the opened UART device.

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 13+  
- **Confidence:** documented

| Param | Type / notes |
|---|---|
| `interfaceId` | String (required) ID of the UART interface. |
| `data` | String (required) Data to write into the UART device. |
| `dataType` | String (required) Type of data in the data field. |
| `size` | String (required) Size of the data passed to be written. |

**Returns:**

| Field | Type / notes |
|---|---|
| `errorText` | String (optional) The reason for the failure of the operation. See the API Error Codes Reference section for details. |
| `errorCode` | Number (optional) The error code for the failed operation. |
| `size` | Number (optional) Size of the data written to the device. |

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uart/write '{ "interfaceId":"ttyACM0", "data": "xyzabc", "dataType":"text", "size":6 }
```

> ACG: peripheralmanager.uart.operation \| Returns: errorText:String; errorCode:Number; returnValue:Boolean; size:Number \| Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)

<a id="uartlist"></a>
## `uartList`

`luna://com.webos.service.peripheralmanager/uartList`

Provide List of UART interfaces along with the status

- **Access:** unknown  
- **Subscribe:** no  
- **Platform:** webOS OSE  
- **Versions:** webOS OSE API level 29+  
- **Confidence:** documented

```sh
luna-send -n 1 -f luna://com.webos.service.peripheralmanager/uartList '{}'
```

> Service: The peripheralmanager is a service to provide APIs to monitor sensors and control actuators connected to I/O peripherals using industry-standard protocols. Currently, supported protocols are UART ,GPI \| Example synthesized from parameter table (page has no example).

Sources: [1](https://www.webosose.org/docs/reference/ls2-api/com-webos-service-peripheralmanager/)
