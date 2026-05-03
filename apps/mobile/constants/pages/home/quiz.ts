import { Check, Scan, Slash, X } from 'lucide-react-native'

export const QUESTIONS = [
  {
    id: 1,
    chapter: 'Capítulo 1: Antepasados',
    text: '¿Cuál fue el principal grupo indígena que habitó la región antes de la conquista?',
    options: ['Los Muiscas', 'Los Hacaritamas', 'Los Taironas', 'Los Caribes'],
    correctIndex: 1
  },
  {
    id: 2,
    chapter: 'Capítulo 1: Antepasados',
    text: '¿Qué actividad económica principal desarrollaban estas tribus?',
    options: [
      'Minería',
      'Ganadería',
      'Agricultura y trueque',
      'Pesca en alta mar'
    ],
    correctIndex: 2
  }
]

export function getOptionStyle(
  isSelected: boolean,
  isCorrect: boolean,
  hasSubmitted: boolean
) {
  if (!hasSubmitted) {
    if (isSelected) {
      return {
        containerClass: 'border-muted-foreground bg-muted-foreground/10',
        icon: Scan,
        colorClass: 'text-muted-foreground'
      }
    }
    return {
      containerClass: 'border-border',
      icon: Slash,
      colorClass: ''
    }
  }

  if (isCorrect) {
    return {
      containerClass: 'border-primary bg-primary/10',
      icon: Check,
      colorClass: 'text-primary'
    }
  }

  if (isSelected && !isCorrect) {
    return {
      containerClass: 'border-destructive bg-destructive/10',
      icon: X,
      colorClass: 'text-destructive'
    }
  }

  return {
    containerClass: 'border-border opacity-50',
    icon: Slash,
    colorClass: 'text-gray-500'
  }
}
