import { z } from "zod/v4";
declare const NotificationSettingMutationSchemaDefinition: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type NotificationSettingMutationDefinition = z.infer<typeof NotificationSettingMutationSchemaDefinition>;
/**
 * Notification setting mutation
 *
 * @openapiSchema NotificationSettingMutation
 * @endpoint PATCH /v1/app/notification-settings/{type}
 * @contractShape notification.setting-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/notificationsetting/NotificationSettingMutation.kt
 */
export declare const NotificationSettingMutationSchema: z.ZodType<NotificationSettingMutationDefinition>;
export type NotificationSettingMutation = z.infer<typeof NotificationSettingMutationSchema>;
export {};
//# sourceMappingURL=setting-mutation.d.ts.map