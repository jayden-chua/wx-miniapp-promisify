# Wechat Miniapp Promisify
其他语言版本: [English](README.md), [简体中文](README.zh-cn.md)

`wx-miniapp-promisify` 是一个简单的包装器，返回最常用的 wx 异步功能作为 `Promise` 对象。这个库只应在微信小程序中使用。

## 目录
- [如何在微信小程序中通过 npm 安装 wx-miniapp-promisify](#如何在微信小程序中通过-npm-安装-wx-miniapp-promisify)
- [如何在微信小程序中使用 wx-miniapp-promisify](#如何在微信小程序中使用-wx-miniapp-promisify)
- [辅助方法](#辅助方法)
- [支持方法](#支持方法)

## 如何在微信小程序中通过 npm 安装 wx-miniapp-promisify
1. 转到您的微信小程序文件夹并运行 `npm install wx-miniapp-promisify`.
2. 在您的微信开发者工具中，请确保以下内容：
    1. 在“设置 > 项目设置”中，确保“ES6转ES5”和“使用npm模块”的选项被选中。
    2. 在“工具” 中，点击“构建NPM”。

## 如何在微信小程序中使用 wx-miniapp-promisify
1. 使用 `import` 或 `require` 语句将库引入到代码中.
```
// 在 “page/index.js” 中使用 “import” 语法示例

import wxPromise from 'wx-miniapp-promisify';

// 在 “page/index.js” 中使用 require 语法示例

let wxPromise = require('wx-miniapp-promisify');
```
2. `wx-miniapp-promisify` 的方法跟在 `wx` 异步方法大致是一致的。
```
// 使用单纯 "wx.request" 的示例

let normalResponse = wx.request({
    url: 'test.php', // imaginary url endpoint
    data: {
        x: '',
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    success (res) {
        console.log(res.data)
    }
});

// 使用 "wx-miniapp-promisify" 的示例

let promiseResponse = wxPromise.request({
    url: 'test.php', // imaginary url endpoint
    data: {
        x: '',
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    success (res) {
        console.log(res.data)
    }
});
```
## 辅助方法
|方法|参数|类型|返回值|示例
|---|---|---|---|---|
|`isPromisable`|`methodName`|`string`|`boolean`|`wxPromise.isPromisable('newWxMethod')`

## 支持方法
- [downloadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)
- [request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
- [uploadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)
- [closeSocket](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html)
- [connectSocket](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html)
- [sendSocketMessage](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html)
- [getAvailableAudioSources](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html)
- [pauseVoice](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html)
- [playVoice](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html)
- [setInnerAudioOption](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html)
- [stopVoice](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html)
- [getBackgroundAudioPlayerState](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html)
- [pauseBackgroundAudio](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html)
- [playBackgroundAudio](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html)
- [seekBackgroundAudio](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html)
- [stopBackgroundAudio](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html)
- [loadFontFace](https://developers.weixin.qq.com/miniprogram/dev/api/media/font/wx.loadFontFace.html)
- [chooseImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)
- [compressImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html)
- [getImageInfo](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)
- [previewImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)
- [saveImageToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
- [startRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html)
- [stopRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html)
- [chooseVideo](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)
- [saveVideoToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html)
- [getFileInfo](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html)
- [getSavedFileInfo](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html)
- [getSavedFileList](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)
- [openDocument](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html)
- [removeSavedFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html)
- [saveFile](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)
- [getStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html)
- [getStorageInfo](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html)
- [removeStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html)
- [setStorage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)
- [chooseLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)
- [getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)
- [openLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)
- [startAccelerometer](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html)
- [stopAccelerometer](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html)
- [getBatteryInfo](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html)
- [closeBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html)
- [getBluetoothAdapterState](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html)
- [getBluetoothDevices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html)
- [getConnectedBluetoothDevices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)
- [openBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
- [startBluetoothDevicesDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)
- [stopBluetoothDevicesDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html)
- [closeBLEConnection](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html)
- [createBLEConnection](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html)
- [getBLEDeviceCharacteristics](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)
- [getBLEDeviceServices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html)
- [notifyBLECharacteristicValueChange](https://developersweixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html)
- [readBLECharacteristicValue](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html)
- [writeBLECharacteristicValue](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html)
- [getClipboardData](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html)
- [setClipboardData](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html)
- [startCompass](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html)
- [stopCompass](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html)
- [addPhoneContact](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html)
- [startGyroscope](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html)
- [stopGyroscope](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html)
- [getBeacons](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html)
- [startBeaconDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html)
- [stopBeaconDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html)
- [startDeviceMotionListening](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html)
- [stopDeviceMotionListening](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html)
- [getNetworkType](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html)
- [getHCEState](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getHCEState.html)
- [sendHCEMessage](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.sendHCEMessage.html)
- [startHCE](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.startHCE.html)
- [stopHCE](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.stopHCE.html)
- [makePhoneCall](https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html)
- [scanCode](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html)
- [getScreenBrightness](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html)
- [setKeepScreenOn](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html)
- [setScreenBrightness](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html)
- [vibrateLong](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateLong.html)
- [vibrateShort](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html)
- [connectWifi](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html)
- [getConnectedWifi](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html)
- [getWifiList](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html)
- [setWifiList](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html)
- [startWifi](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html)
- [stopWifi](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html)
- [setBackgroundColor](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html)
- [setBackgroundTextStyle](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html)
- [hideLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html)
- [hideToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html)
- [showActionSheet](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)
- [showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
- [showModal](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)
- [showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
- [hideNavigationBarLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html)
- [setNavigationBarColor](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html)
- [setNavigationBarTitle](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html)
- [showNavigationBarLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html)
- [startPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html)
- [stopPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html)
- [pageScrollTo](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html)
- [setTopBarText](https://developers.weixin.qq.com/miniprogram/dev/api/ui/sticky/wx.setTopBarText.html)
- [hideTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html)
- [hideTabBarRedDot](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html)
- [removeTabBarBadge](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html)
- [setTabBarBadge](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html)
- [setTabBarItem](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html)
- [setTabBarStyle](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html)
- [showTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html)
- [showTabBarRedDot](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html)
- [chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
- [authorize](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)
- [addCard](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html)
- [openCard](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html)
- [chooseInvoice](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html)
- [chooseInvoiceTitle](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html)
- [checkSession](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html)
- [login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)
- [navigateBackMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html)
- [navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)
- [requestPayment](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html)
- [getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
- [openSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
- [checkIsSoterEnrolledInDevice](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html)
- [checkIsSupportSoterAuthentication](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html)
- [startSoterAuthentication](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html)
- [getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
- [getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)
- [canvasGetImageData](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html)
- [canvasPutImageData](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html)
- [canvasToTempFilePath](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html)
- [getExtConfig](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html)
- [navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)
- [navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)
- [redirectTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html)
- [reLaunch](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html)
- [switchTab](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)
- [getShareInfo](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html)
- [hideShareMenu](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html)
- [showShareMenu](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html)
- [updateShareMenu](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html)
- [getSystemInfo](https://developers.weixin.qq.com/miniprogram/dev/api/system/system-info/wx.getSystemInfo.html)