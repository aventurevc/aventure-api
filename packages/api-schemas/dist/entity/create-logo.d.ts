import { z } from "zod/v4";
/**
 * Logo imported or attached during entity create, requiring agent audit.
 *
 * @openapiSchema EntityCreateLogo
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityCreateResultSchema
 * @contractShape entity.create-logo
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreateLogo.kt
 */
export declare const EntityCreateLogoSchema: z.ZodObject<{
    media: z.ZodObject<{
        cdnUrl: z.ZodString;
        firstUploadedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        mediaType: z.ZodEnum<{
            BLOG: "BLOG";
            ENTITY: "ENTITY";
            NEWS: "NEWS";
            PERSON: "PERSON";
        }>;
        path: z.ZodString;
        provenance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        targetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    source: z.ZodEnum<{
        AUTO_WEBSITE: "AUTO_WEBSITE";
        MANUAL_IMAGE_URL: "MANUAL_IMAGE_URL";
        MANUAL_UPLOAD: "MANUAL_UPLOAD";
    }>;
    sourceImageUrl: z.ZodString;
}, z.core.$strip>;
export type EntityCreateLogo = z.infer<typeof EntityCreateLogoSchema>;
//# sourceMappingURL=create-logo.d.ts.map