import type { MaterialId } from '../lib/types';

export interface Material {
  id: MaterialId;
  label: string;
  /** kg per cubic metre, a typical value: real batches vary by a few percent */
  density: number;
  /** viewport colour and finish */
  color: string;
  metalness: number;
  roughness: number;
  note: string;
}

/**
 * Typical densities. Source: Engineering ToolBox, "Densities of Solids",
 * https://www.engineeringtoolbox.com/density-solids-d_1265.html
 * Ranges there: bronze 7400-8900, marble 2560-2800, limestone 2180-2710, concrete ~2400,
 * steel 7850, porcelain ~2400. The tool uses one value per material and says so.
 */
export const MATERIALS: Material[] = [
  { id: 'bronze', label: 'ברונזה', density: 8800, color: '#8a5a2e', metalness: 0.75, roughness: 0.38, note: 'יציקה חלולה מקטינה משקל. החישוב מניח גוף מלא.' },
  { id: 'marble', label: 'שיש', density: 2700, color: '#e9e6df', metalness: 0, roughness: 0.32, note: 'החומר של ברניני. שביר במתיחה, לכן חורים דקים מסוכנים.' },
  { id: 'limestone', label: 'אבן גיר', density: 2500, color: '#d8cdb4', metalness: 0, roughness: 0.85, note: 'אבן מקומית. טווח הצפיפות רחב (2,180 עד 2,710).' },
  { id: 'concrete', label: 'בטון', density: 2400, color: '#a7a7a2', metalness: 0, roughness: 0.9, note: 'יצוק בתבנית. מתאים לגוף גדול במרחב ציבורי.' },
  { id: 'corten', label: 'פלדת קורטן', density: 7850, color: '#7b3b1d', metalness: 0.55, roughness: 0.7, note: 'בפועל לוחות ולא גוף מלא. החישוב מניח גוף מלא, ולכן מחמיר.' },
  { id: 'porcelain', label: 'חרסינה', density: 2400, color: '#f4f2ee', metalness: 0, roughness: 0.25, note: 'החומר של זרעי החמנייה. מתאים לריבוי של יחידות קטנות.' },
];

export const materialById = (id: MaterialId) => MATERIALS.find((m) => m.id === id) ?? MATERIALS[0];
