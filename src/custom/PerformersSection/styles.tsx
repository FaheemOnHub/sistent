import { Box, Card, CardContent, Typography } from '../../base';
import { DARK_TEAL, styled } from '../../theme';
import { getCatalogCardBackground } from '../CustomCatalog/style';

interface ContentWrapperProps {
  cardId?: string;
}

interface StyledCardProps {
  status?: string;
}

export const ChartDiv = styled(Box)(() => ({
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: 'white',
  width: '100%',
  alignSelf: 'center',
  height: '20rem',
  marginBottom: '1rem',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
  display: 'block',
  ['@media (max-width:900px)']: {
    height: '18rem',
    marginInline: '0',
    padding: '0.5rem'
  }
}));

export const LoadButtonDiv = styled('div')(() => ({
  width: '100%',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px'
}));

export const EmptyContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: '2.5rem',
  width: '100%'
}));

export const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  gap: '2.5rem',
  width: '100%'
}));

export const EmptyStateDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  textAlign: 'center',
  borderRadius: '1rem',
  width: '100%',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.background.secondary,
  paddingTop: theme.spacing(2),
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  paddingInline: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  placeSelf: 'flex-start',
  justifyContent: 'space-between',
  width: '100%'
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.text.default
}));

export const StyledCard = styled(Card)<StyledCardProps>(({ theme }) => ({
  width: '200px',
  margin: '0.5rem',
  height: '100%',
  borderRadius: '1rem',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  background: getCatalogCardBackground(theme.palette.mode === 'light'),
  border: '1px solid transparent',
  boxShadow: '2px 2px 3px 2px  rgb(0, 211, 169, 0.5)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `2px 2px 3px 2px ${theme.palette.text.brand}`,
    cursor: 'pointer'
  }
}));

export const CardSkeleton = styled('div')(() => ({
  display: 'flex',
  gap: '10px',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  width: '100%'
}));

export const IconContainer = styled(Box)(() => ({
  width: '2rem',
  height: '2rem',
  padding: '0.25rem',
  borderRadius: '8px',
  backgroundColor: '#D6FFF7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '& svg': {
    transition: 'transform 0.3s ease'
  },
  '&:hover svg': {
    transform: 'scale(1.2)'
  },
  '& .clone-icon': {
    width: '20px',
    height: '20px'
  }
}));

export const ContentWrapper = styled(CardContent)<ContentWrapperProps>(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  paddingBottom: '0px !important'
}));

export const HeaderSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '0.5rem',
  gap: '0.6rem'
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  fontWeight: 'bold',
  color: theme.palette.text.default,
  lineHeight: 1.2,
  marginTop: '4px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'clip',
  maxWidth: '70%',
  height: '2.4em'
}));

export const StatsValue = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: theme.palette.icon.secondary,
  marginBottom: '0.5rem',
  lineHeight: 1.2
}));

export const RepoSection = styled(Box)(({ theme }) => ({
  marginBottom: '1rem',
  padding: '8px',
  borderRadius: '8px',
  background: theme.palette.mode === 'light' ? '#f8fafc' : DARK_TEAL,
  color: theme.palette.mode === 'light' ? 'rgba(26, 26, 26, .8)' : theme.palette.text.default,
  transition: 'background 0.3s ease, filter 0.3s ease',
  '&:hover': {
    filter: 'brightness(0.98)'
  }
}));

export const RepoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 1000,
  color: theme.palette.text.default,
  lineHeight: 1.3,
  marginBottom: '4px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: 'fit-content',
  maxHeight: '2.6em'
}));

export const UserNameText = styled(Typography)({
  fontSize: '0.75rem',
  marginBottom: '8px'
});

export const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  width: '100%',
  padding: '20px',
  background:
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.background.secondary,
  borderRadius: '12px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  paddingBottom: theme.spacing(3)
}));

export const ErrorContainer = styled(Box)(({ theme }) => ({
  padding: '1rem',
  color: theme.palette.text.error,
  fontSize: '1rem',
  fontWeight: 500
}));
