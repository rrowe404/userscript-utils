/** Expand this as more options begin being used. */ 
export interface UserScriptMetadata {
    description: string;
    'inject-into'?: string;
    match: string;
    name: string;
}