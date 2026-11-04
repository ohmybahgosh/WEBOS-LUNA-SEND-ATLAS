# `com.webos.service.accountmanager`

16 methods.  Platforms seen: webOS TV.

[Back to index](../../README.md#services)

| Method | Access | Sub | Category | Description |
|---|---|---|---|---|
| [`debug`](#debug) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`deleteAccount`](#deleteaccount) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). ⚠️ |
| [`deleteOOBEData`](#deleteoobedata) | public |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). ⚠️ |
| [`getAccountData`](#getaccountdata) | private |  | system-info | Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`getAccountTerm`](#getaccountterm) | private |  | system-info | Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`getLoginHistory`](#getloginhistory) | private |  | system-info | Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`getLoginID`](#getloginid) | private |  | system-info | Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`getLoginUserData`](#getloginuserdata) | private |  | system-info | Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`getOOBEData`](#getoobedata) | public |  | system-info | Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`loginAccount`](#loginaccount) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`loginAccountByExtDevice`](#loginaccountbyextdevice) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`logoutAccount`](#logoutaccount) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`registerAccountSwitching`](#registeraccountswitching) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`responseAccountSwitchingRequest`](#responseaccountswitchingrequest) | private |  | system-info | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`setOOBEData`](#setoobedata) | private |  | system-info | Setter on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |
| [`updateAccountData`](#updateaccountdata) | private |  | update | Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented). |

<a id="debug"></a>
## `debug`

`luna://com.webos.service.accountmanager/debug`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/debug '{}'
```

> ACG groups: all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteaccount"></a>
## `deleteAccount` ⚠️ DANGEROUS

`luna://com.webos.service.accountmanager/deleteAccount`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/deleteAccount '{}'
```

> ACG groups: private, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="deleteoobedata"></a>
## `deleteOOBEData` ⚠️ DANGEROUS

`luna://com.webos.service.accountmanager/deleteOOBEData`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/deleteOOBEData '{}'
```

> ACG groups: private, public, all. Flagged dangerous by name; verify before calling.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccountdata"></a>
## `getAccountData`

`luna://com.webos.service.accountmanager/getAccountData`

Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getAccountData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getaccountterm"></a>
## `getAccountTerm`

`luna://com.webos.service.accountmanager/getAccountTerm`

Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getAccountTerm '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getloginhistory"></a>
## `getLoginHistory`

`luna://com.webos.service.accountmanager/getLoginHistory`

Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getLoginHistory '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getloginid"></a>
## `getLoginID`

`luna://com.webos.service.accountmanager/getLoginID`

Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getLoginID '{}'
```

> ACG groups: configurator.callbacks, private, activities.callbacks, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getloginuserdata"></a>
## `getLoginUserData`

`luna://com.webos.service.accountmanager/getLoginUserData`

Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getLoginUserData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="getoobedata"></a>
## `getOOBEData`

`luna://com.webos.service.accountmanager/getOOBEData`

Getter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** public  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/getOOBEData '{}'
```

> ACG groups: private, public, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loginaccount"></a>
## `loginAccount`

`luna://com.webos.service.accountmanager/loginAccount`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/loginAccount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="loginaccountbyextdevice"></a>
## `loginAccountByExtDevice`

`luna://com.webos.service.accountmanager/loginAccountByExtDevice`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/loginAccountByExtDevice '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="logoutaccount"></a>
## `logoutAccount`

`luna://com.webos.service.accountmanager/logoutAccount`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/logoutAccount '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="registeraccountswitching"></a>
## `registerAccountSwitching`

`luna://com.webos.service.accountmanager/registerAccountSwitching`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/registerAccountSwitching '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="responseaccountswitchingrequest"></a>
## `responseAccountSwitchingRequest`

`luna://com.webos.service.accountmanager/responseAccountSwitchingRequest`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/responseAccountSwitchingRequest '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="setoobedata"></a>
## `setOOBEData`

`luna://com.webos.service.accountmanager/setOOBEData`

Setter on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/setOOBEData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))

<a id="updateaccountdata"></a>
## `updateAccountData`

`luna://com.webos.service.accountmanager/updateAccountData`

Method on com.webos.service.accountmanager (introspected on-device; parameters undocumented).

- **Access:** private  
- **Subscribe:** no  
- **Platform:** webOS TV  
- **Versions:** seen on webOS TV 7.0 (model W22O, firmware 33.31.68)  
- **Confidence:** code

```sh
luna-send -n 1 -f luna://com.webos.service.accountmanager/updateAccountData '{}'
```

> ACG groups: private, all.

Sources: [1](https://github.com/ohmybahgosh/WEBOS-LUNA-SEND-ATLAS (on-device introspection: LG OLED, webOS TV 7.0, W22O 33.31.68))
