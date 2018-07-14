namespace paper.editor {
    /**
     * 场景编辑器
     **/
    export class Editor {
        public static get editorModel(): EditorModel {
            return this._editorModel;
        }

        private static _editorModel: EditorModel;
        /**初始化 */
        public static async init() {
            // 覆盖生成 uuid 的方式。
            createUUID = generateUuid;
            //启动egret3编辑环境
            this.runEgret();
            await RES.loadConfig("resource/default.res.json", "resource/");
            //初始化编辑模型
            this._editorModel = new EditorModel();
        }
        private static runEgret() {
            egret3d.runEgret({ antialias: true, isEditor: true, isPlaying: false });

            Application.systemManager.registerBefore(editor.EditorCameraSystem, egret3d.CameraSystem);
            Application.systemManager.disableSystem(egret3d.CameraSystem);
        }
    }

}