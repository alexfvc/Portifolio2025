import { useState } from 'react';
import {
  Dialog, DialogContent, DialogTitle, DialogActions,
  TextField, Button, Stack, Typography, Grid,
  IconButton, useTheme, Box, Alert, CircularProgress,
} from '@mui/material';
import { Icon } from '@iconify/react';

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  empresa: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

interface Props {
  open: boolean;
  onClose: () => void;
  emailTo: string;
}

const emptyForm: FormState = {
  nome: '', email: '', telefone: '', cidade: '', empresa: '', mensagem: '',
};

const FieldLabel = ({ label, required }: { label: string; required?: boolean }) => (
  <Typography variant="body2" fontWeight={600} color="text.primary" mb={0.5}>
    {label}
    {required && (
      <Typography component="span" color="error.main" ml={0.5}>*</Typography>
    )}
  </Typography>
);

const ContactFormModal: React.FC<Props> = ({ open, onClose, emailTo }) => {
  const theme = useTheme();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.nome.trim()) newErrors.nome = 'Campo obrigatório';
    if (!form.email.trim()) newErrors.email = 'Campo obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'E-mail inválido';
    if (!form.telefone.trim()) newErrors.telefone = 'Campo obrigatório';
    if (!form.mensagem.trim()) newErrors.mensagem = 'Campo obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Erro ao enviar. Tente novamente.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Falha na conexão. Tente novamente.');
      setStatus('error');
    }
  }

  function handleClose() {
    setForm(emptyForm);
    setErrors({});
    setStatus('idle');
    setErrorMsg('');
    onClose();
  }

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      bgcolor: theme.palette.background.default,
    },
  };

  const isSending = status === 'sending';

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Icon icon="line-md:email" fontSize="1.5rem" color={theme.palette.primary.main} />
            <Typography variant="h5" fontWeight="bold">Enviar mensagem</Typography>
          </Stack>
          <IconButton onClick={handleClose} aria-label="Fechar" size="small">
            <Icon icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>

      {status === 'success' ? (
        /* ── Estado de sucesso ── */
        <DialogContent>
          <Stack alignItems="center" spacing={2} py={4}>
            <Icon
              icon="material-symbols:check-circle"
              fontSize="5rem"
              color={theme.palette.success.main}
            />
            <Typography variant="h5" fontWeight="bold">Mensagem enviada!</Typography>
            <Typography color="text.secondary" textAlign="center">
              Obrigado pelo contato. Responderei em breve.
            </Typography>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Fechar
            </Button>
          </Stack>
        </DialogContent>
      ) : (
        /* ── Formulário ── */
        <>
          <DialogContent
            sx={{
              scrollbarWidth: 'thin',
              scrollbarColor: `${theme.palette.action.disabled} ${theme.palette.background.default}`,
              '&::-webkit-scrollbar': { width: '6px' },
              '&::-webkit-scrollbar-track': { bgcolor: theme.palette.background.default },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: theme.palette.action.disabled,
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb:hover': { bgcolor: theme.palette.text.secondary },
            }}
          >
            <Stack spacing={2.5} pt={1}>
              {status === 'error' && (
                <Alert severity="error" onClose={() => setStatus('idle')}>
                  {errorMsg || `Erro ao enviar. Contate diretamente: ${emailTo}`}
                </Alert>
              )}

              {/* Nome + E-mail */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel label="Nome completo" required />
                  <TextField
                    fullWidth
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange('nome')}
                    error={!!errors.nome}
                    helperText={errors.nome}
                    disabled={isSending}
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel label="E-mail" required />
                  <TextField
                    fullWidth
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange('email')}
                    error={!!errors.email}
                    helperText={errors.email}
                    disabled={isSending}
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Telefone + Cidade */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel label="Telefone" required />
                  <TextField
                    fullWidth
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={handleChange('telefone')}
                    error={!!errors.telefone}
                    helperText={errors.telefone}
                    disabled={isSending}
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel label="Cidade" />
                  <TextField
                    fullWidth
                    placeholder="Cidade"
                    value={form.cidade}
                    onChange={handleChange('cidade')}
                    disabled={isSending}
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              {/* Empresa */}
              <Box>
                <FieldLabel label="Empresa" />
                <TextField
                  fullWidth
                  placeholder="Empresa"
                  value={form.empresa}
                  onChange={handleChange('empresa')}
                  disabled={isSending}
                  sx={inputSx}
                />
              </Box>

              {/* Mensagem */}
              <Box>
                <FieldLabel label="Mensagem" required />
                <TextField
                  fullWidth
                  placeholder="Mensagem"
                  value={form.mensagem}
                  onChange={handleChange('mensagem')}
                  error={!!errors.mensagem}
                  helperText={errors.mensagem}
                  multiline
                  minRows={3}
                  disabled={isSending}
                  inputProps={{ style: { resize: 'vertical', minHeight: '80px' } }}
                  sx={inputSx}
                />
              </Box>
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 3, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
              disabled={isSending}
              startIcon={
                isSending
                  ? <CircularProgress size={18} color="inherit" />
                  : <Icon icon="material-symbols:send" />
              }
              sx={{ px: 6, borderRadius: '8px', minWidth: 200 }}
            >
              {isSending ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ContactFormModal;
