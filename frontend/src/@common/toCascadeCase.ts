/**
 * Lowercase to CascadeCase
 * 
 * @param str - String
 * @returns CascadeCased String
 * @since 1.0.0
 */
function toCascadeCase(str: string) {
  return str
    .split("")
    .map((char, index) => (index == 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");
}

export default toCascadeCase;