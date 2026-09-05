// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NotificationSettingTypeSchema } from "./setting-type.js";
const NotificationSettingSchemaDefinition = z.object({
    /** Settings section this notification belongs to */
    category: z.enum(["ACCOUNT", "RESEARCH"]),
    /** Whether this notification is enabled for the user */
    enabled: z.boolean(),
    /** Human-readable setting label */
    label: z.string(),
    type: NotificationSettingTypeSchema,
});
/**
 * Per-user notification setting with resolved enablement
 *
 * @openapiSchema NotificationSetting
 * @endpoint GET /v1/app/notification-settings
 * @endpoint PATCH /v1/app/notification-settings/{type}
 * @contractShape notification.setting
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/notificationsetting/NotificationSetting.kt
 */
export const NotificationSettingSchema = NotificationSettingSchemaDefinition;
//# sourceMappingURL=setting.js.map