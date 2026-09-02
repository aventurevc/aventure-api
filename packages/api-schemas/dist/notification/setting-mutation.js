// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NotificationSettingMutationSchemaDefinition = z.object({
    /** New enablement for the setting */
    enabled: z.boolean().nullish(),
});
/**
 * Notification setting mutation
 *
 * @openapiSchema NotificationSettingMutation
 * @endpoint PATCH /v1/app/notification-settings/{type}
 * @contractShape notification.setting-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/notificationsetting/NotificationSettingMutation.kt
 */
export const NotificationSettingMutationSchema = NotificationSettingMutationSchemaDefinition;
//# sourceMappingURL=setting-mutation.js.map