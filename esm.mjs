//ES Module Wrapper
//https://nodejs.org/api/esm.html#esm_dual_commonjs_es_module_packages

import module from './toast.cjs';
export const isValidAUMID = module.isValidAUMID;
export default module;