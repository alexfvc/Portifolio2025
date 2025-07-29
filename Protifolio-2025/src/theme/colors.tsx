import { useTheme } from '@mui/material/styles';

function usePrimaryColors() {
  const theme = useTheme();
  return theme.palette || {};
}
export default usePrimaryColors