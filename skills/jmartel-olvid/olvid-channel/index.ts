import type { OpenClawPluginApi } from "openclaw/plugin-sdk";
import { emptyPluginConfigSchema } from "openclaw/plugin-sdk";
import { olvidPlugin } from "./src/channel.js";
import { setOlvidRuntime } from "./src/runtime.js";

const plugin = {
  id: "olvid",
  name: "Olvid",
  description: "Olvid channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: OpenClawPluginApi) {
    setOlvidRuntime(api.runtime);
    api.registerChannel({ plugin: olvidPlugin });
  },
};

export default plugin;
