import { z } from "zod/v4";
/**
 * Logo sort priority for entity search
 *
 * @openapiSchema EntityFilterLogoOption
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFilterSchema
 * @contractShape entity.filter-logo-option
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/filter/LogoFilterOption.kt
 */
export declare const EntityFilterLogoOptionSchema: z.ZodObject<{
    sortPriority: z.ZodEnum<{
        ANY_LOGO_FIRST: "ANY_LOGO_FIRST";
        NONE: "NONE";
        REAL_LOGO_FIRST: "REAL_LOGO_FIRST";
    }>;
}, z.core.$strip>;
export type EntityFilterLogoOption = z.infer<typeof EntityFilterLogoOptionSchema>;
//# sourceMappingURL=filter-logo-option.d.ts.map