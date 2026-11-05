# `com.webos.service.accountmanager`

Account manager: logs user accounts in and out, stores and updates account data, tracks login history, and manages onboarding (OOBE) data and account switching.

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Conf | Description |
|---|---|---|---|---|---|
| [`debug`](#debug) | private |  | system-info | inferred | Handles the debug. |
| [`deleteAccount`](#deleteaccount) | private |  | system-info | inferred | Deletes the account. ⚠️ |
| [`deleteOOBEData`](#deleteoobedata) | public |  | system-info | inferred | Deletes the OOBE data. ⚠️ |
| [`getAccountData`](#getaccountdata) | private |  | system-info | inferred | Returns the account data. |
| [`getAccountTerm`](#getaccountterm) | private |  | system-info | inferred | Returns the account term. |
| [`getLoginHistory`](#getloginhistory) | private |  | system-info | inferred | Returns the login history. |
| [`getLoginID`](#getloginid) | private |  | system-info | inferred | Returns the login ID. |
| [`getLoginUserData`](#getloginuserdata) | private |  | system-info | inferred | Returns the login user data. |
| [`getOOBEData`](#getoobedata) | public |  | system-info | inferred | Returns the OOBE data. |
| [`loginAccount`](#loginaccount) | private |  | system-info | inferred | Logs in to the account. |
| [`loginAccountByExtDevice`](#loginaccountbyextdevice) | private |  | system-info | inferred | Logs in to the account by ext device. |
| [`logoutAccount`](#logoutaccount) | private |  | system-info | inferred | Logs out of the account. |
| [`registerAccountSwitching`](#registeraccountswitching) | private |  | system-info | inferred | Registers the account switching. |
| [`responseAccountSwitchingRequest`](#responseaccountswitchingrequest) | private |  | system-info | inferred | Handles the response account switching request. |
| [`setOOBEData`](#setoobedata) | private |  | system-info | inferred | Sets the OOBE data. |
| [`updateAccountData`](#updateaccountdata) | private |  | update | inferred | Updates the account data. |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.accountmanager/debug`

Handles the debug.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/debug '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteaccount"></a>
## `deleteAccount` ⚠️ DANGEROUS

`luna://com.webos.service.accountmanager/deleteAccount`

Deletes the account.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/deleteAccount '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteoobedata"></a>
## `deleteOOBEData` ⚠️ DANGEROUS

`luna://com.webos.service.accountmanager/deleteOOBEData`

Deletes the OOBE data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/deleteOOBEData '{}'
```

> ACG groups: private, public, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccountdata"></a>
## `getAccountData`

`luna://com.webos.service.accountmanager/getAccountData`

Returns the account data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getAccountData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccountterm"></a>
## `getAccountTerm`

`luna://com.webos.service.accountmanager/getAccountTerm`

Returns the account term.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getAccountTerm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getloginhistory"></a>
## `getLoginHistory`

`luna://com.webos.service.accountmanager/getLoginHistory`

Returns the login history.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getLoginHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getloginid"></a>
## `getLoginID`

`luna://com.webos.service.accountmanager/getLoginID`

Returns the login ID.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getLoginID '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getloginuserdata"></a>
## `getLoginUserData`

`luna://com.webos.service.accountmanager/getLoginUserData`

Returns the login user data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getLoginUserData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoobedata"></a>
## `getOOBEData`

`luna://com.webos.service.accountmanager/getOOBEData`

Returns the OOBE data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getOOBEData '{}'
```

> ACG groups: private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loginaccount"></a>
## `loginAccount`

`luna://com.webos.service.accountmanager/loginAccount`

Logs in to the account.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/loginAccount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loginaccountbyextdevice"></a>
## `loginAccountByExtDevice`

`luna://com.webos.service.accountmanager/loginAccountByExtDevice`

Logs in to the account by ext device.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/loginAccountByExtDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="logoutaccount"></a>
## `logoutAccount`

`luna://com.webos.service.accountmanager/logoutAccount`

Logs out of the account.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/logoutAccount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registeraccountswitching"></a>
## `registerAccountSwitching`

`luna://com.webos.service.accountmanager/registerAccountSwitching`

Registers the account switching.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/registerAccountSwitching '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseaccountswitchingrequest"></a>
## `responseAccountSwitchingRequest`

`luna://com.webos.service.accountmanager/responseAccountSwitchingRequest`

Handles the response account switching request.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/responseAccountSwitchingRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoobedata"></a>
## `setOOBEData`

`luna://com.webos.service.accountmanager/setOOBEData`

Sets the OOBE data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/setOOBEData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateaccountdata"></a>
## `updateAccountData`

`luna://com.webos.service.accountmanager/updateAccountData`

Updates the account data.

> _Description inferred from the method name; parameters are not publicly documented._

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** inferred

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/updateAccountData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
