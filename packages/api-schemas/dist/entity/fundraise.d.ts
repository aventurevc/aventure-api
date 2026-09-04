import { z } from "zod/v4";
/**
 * Fundraise transaction metadata linked to a person investment
 *
 * @openapiSchema EntityFundraise
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonInvestmentSchema
 * @contractShape entity.fundraise
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonInvestment.kt
 */
export declare const EntityFundraiseSchema: z.ZodObject<{
    amountRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dateAnnounced: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodUUID;
    image: z.ZodType<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, unknown>>;
    investorCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    nameBrand: z.ZodString;
    round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    valuationPostMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type EntityFundraise = z.infer<typeof EntityFundraiseSchema>;
//# sourceMappingURL=fundraise.d.ts.map