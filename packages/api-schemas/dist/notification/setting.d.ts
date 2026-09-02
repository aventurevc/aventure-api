import { z } from "zod/v4";
declare const NotificationSettingSchemaDefinition: z.ZodObject<{
    category: z.ZodEnum<{
        ACCOUNT: "ACCOUNT";
        RESEARCH: "RESEARCH";
    }>;
    enabled: z.ZodBoolean;
    label: z.ZodString;
    type: z.ZodEnum<{
        LOGIN_EVERY: "LOGIN_EVERY";
        LOGIN_NEW_DEVICE: "LOGIN_NEW_DEVICE";
        RESEARCH_NEW_COMPANY: "RESEARCH_NEW_COMPANY";
        RESEARCH_NEW_FUND: "RESEARCH_NEW_FUND";
    }>;
}, z.core.$strip>;
type NotificationSettingDefinition = z.infer<typeof NotificationSettingSchemaDefinition>;
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
export declare const NotificationSettingSchema: z.ZodType<NotificationSettingDefinition>;
export type NotificationSetting = z.infer<typeof NotificationSettingSchema>;
export {};
//# sourceMappingURL=setting.d.ts.map