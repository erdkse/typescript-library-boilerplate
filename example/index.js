(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var NODE_ENV = {"NVM_INC":"/Users/erdkse/.nvm/versions/node/v16.13.1/include/node","FIG_PID":"36726","TERM_PROGRAM":"vscode","NODE":"/Users/erdkse/.nvm/versions/node/v16.13.1/bin/node","INIT_CWD":"/Users/erdkse/Projects/erdkse/typescript-library-boilerplate","ANDROID_HOME":"/Users/erdkse/Library/Android/sdk","_P9K_TTY":"/dev/ttys009","PYENV_ROOT":"/Users/erdkse/.pyenv","NVM_CD_FLAGS":"-q","TERM":"xterm-256color","SHELL":"/bin/zsh","npm_config_metrics_registry":"https://registry.npmjs.org/","TMPDIR":"/var/folders/z0/qg3xfw652pnb88zdql7nlymc0000gn/T/","npm_config_global_prefix":"/Users/erdkse/.nvm/versions/node/v16.13.1","TERM_PROGRAM_VERSION":"1.69.2","PHPBREW_ROOT":"/Users/erdkse/.phpbrew","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","MallocNanoZone":"0","COLOR":"1","TERM_SESSION_ID":"A09730A7-F3E5-4307-A57D-ED0909F798CA","npm_config_noproxy":"","npm_config_local_prefix":"/Users/erdkse/Projects/erdkse/typescript-library-boilerplate","ZSH":"/Users/erdkse/.oh-my-zsh","NVM_DIR":"/Users/erdkse/.nvm","USER":"erdkse","COMMAND_MODE":"unix2003","npm_config_globalconfig":"/Users/erdkse/.nvm/versions/node/v16.13.1/etc/npmrc","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.DmQgNo7deX/Listeners","__CF_USER_TEXT_ENCODING":"0x1F5:0x0:0x0","npm_execpath":"/Users/erdkse/.nvm/versions/node/v16.13.1/lib/node_modules/npm/bin/npm-cli.js","PAGER":"less","LSCOLORS":"Gxfxcxdxbxegedabagacad","PATH":"/Users/erdkse/Projects/erdkse/typescript-library-boilerplate/node_modules/.bin:/Users/erdkse/Projects/erdkse/node_modules/.bin:/Users/erdkse/Projects/node_modules/.bin:/Users/erdkse/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/erdkse/.nvm/versions/node/v16.13.1/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/erdkse/GoogleCloudSDK/bin:/Users/erdkse/.pyenv/shims:/Users/erdkse/.pyenv/bin:/Users/erdkse/.serverless/bin:/Users/erdkse/.nvm/versions/node/v16.13.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/Users/erdkse/GoogleCloudSDK/bin:/Users/erdkse/.pyenv/bin:/Users/erdkse/.serverless/bin:/Users/erdkse/.nvm/versions/node/v16.13.1/bin:/Users/erdkse/.fig/bin:/Users/erdkse/.local/bin:/Users/erdkse/Flutter/bin:/Users/erdkse/Library/Android/sdk/tools:/Users/erdkse/Library/Android/sdk/platform-tools:/Users/erdkse/Flutter/bin:/Users/erdkse/Library/Android/sdk/tools:/Users/erdkse/Library/Android/sdk/platform-tools","PHPBREW_HOME":"/Users/erdkse/.phpbrew","npm_package_json":"/Users/erdkse/Projects/erdkse/typescript-library-boilerplate/package.json","_":"/Users/erdkse/Projects/erdkse/typescript-library-boilerplate/node_modules/.bin/webpack","npm_config_userconfig":"/Users/erdkse/.npmrc","npm_config_init_module":"/Users/erdkse/.npm-init.js","FIG_WORKFLOWS_KEYBIND":"^f","__CFBundleIdentifier":"com.microsoft.VSCode","npm_command":"run-script","TTY":"/dev/ttys009","PWD":"/Users/erdkse/Projects/erdkse/typescript-library-boilerplate","JAVA_HOME":"/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home","npm_lifecycle_event":"dev","EDITOR":"vi","P9K_SSH":"0","npm_package_name":"typescript-library-boilerplate","LANG":"en_US.UTF-8","P9K_TTY":"old","NODE_PATH":"/Users/erdkse/.nvm/versions/node/v16.13.1/bin/node","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","XPC_FLAGS":"0x0","npm_config_node_gyp":"/Users/erdkse/.nvm/versions/node/v16.13.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","npm_package_version":"0.0.0","XPC_SERVICE_NAME":"0","SHLVL":"4","HOME":"/Users/erdkse","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL":"true","npm_config_cache":"/Users/erdkse/.npm","LESS":"-R","LOGNAME":"erdkse","npm_lifecycle_script":"webpack --watch","VSCODE_GIT_IPC_HANDLE":"/var/folders/z0/qg3xfw652pnb88zdql7nlymc0000gn/T/vscode-git-34dc88a2f9.sock","LC_CTYPE":"UTF-8","NVM_BIN":"/Users/erdkse/.nvm/versions/node/v16.13.1/bin","npm_config_user_agent":"npm/8.1.2 node/v16.13.1 darwin x64 workspaces/false","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","FIG_INTEGRATION_VERSION":"8","FIG_TERM_VERSION":"4.4.1","npm_node_execpath":"/Users/erdkse/.nvm/versions/node/v16.13.1/bin/node","npm_config_prefix":"/Users/erdkse/.nvm/versions/node/v16.13.1","FIG_TERM":"1","COLORTERM":"truecolor","NODE_ENV":"produc"}.NODE_ENV;
var Main = (function () {
    function Main() {
        this.message = 'Main class initialized!';
        this.print(this.message);
    }
    Main.prototype.print = function (message) {
        console.log("[".concat(NODE_ENV, "]: ").concat(message));
    };
    Main.printGlobal = function (message) {
        console.log("[".concat(NODE_ENV, "]: ").concat(message));
    };
    return Main;
}());
exports["default"] = Main;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
var main_1 = __webpack_require__(1);
exports.Main = main_1.default;
var main = new main_1.default();
main.print('Hello world!');
if (__webpack_require__.g && __webpack_require__.g.window) {
    __webpack_require__.g.window.Main = main_1.default;
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});