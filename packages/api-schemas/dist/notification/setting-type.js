// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Notification setting whose default enablement may be overridden per user.
 *
 * @openapiSchema NotificationSettingType
 * @endpoint GET /v1/app/notification-settings
 * @endpoint PATCH /v1/app/notification-settings/{type}
 * @usedBySchema NotificationSettingSchema
 * @contractShape notification.setting-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/notificationsetting/NotificationSetting.kt
 */
export const NotificationSettingTypeSchema = z.enum([
    "LOGIN_EVERY",
    "LOGIN_NEW_DEVICE",
    "RESEARCH_NEW_COMPANY",
    "RESEARCH_NEW_FUND",
]);
//# sourceMappingURL=setting-type.js.map