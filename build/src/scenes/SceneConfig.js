"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */
var SceneConfig = /** @class */ (function (_super) {
    __extends(SceneConfig, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function SceneConfig() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    SceneConfig.prototype.onInitialize = function () {
        var _this = this;
        var env = this._scene.createDefaultEnvironment();
        this._scene.createDefaultXRExperienceAsync({
            floorMeshes: [env.ground]
        });
        this._scene._postProcessRenderPipelineManager.supportedPipelines.forEach(function (pp) {
            _this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(pp.name, _this._scene.activeCamera);
        });
    };
    /**
     * Called on the scene starts.
     */
    SceneConfig.prototype.onStart = function () {
        // ...
    };
    /**
     * Called each frame.
     */
    SceneConfig.prototype.onUpdate = function () {
        // ...
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    SceneConfig.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    return SceneConfig;
}(core_1.Node));
exports.default = SceneConfig;
//# sourceMappingURL=SceneConfig.js.map