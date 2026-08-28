import { z } from "zod/v4";
/**
 * Operation scope a help answer may recommend: read-only, write, or all.
 *
 * @openapiSchema HelpScope
 * @endpoint POST /v1/agents/help
 * @usedBySchema AgentHelpQuestionSchema
 * @contractShape help.scope
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentHelpQuestion.kt
 */
export declare const HelpScopeSchema: z.ZodEnum<{
    ALL: "ALL";
    READ: "READ";
    WRITE: "WRITE";
}>;
export type HelpScope = z.infer<typeof HelpScopeSchema>;
//# sourceMappingURL=scope.d.ts.map