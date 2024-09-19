import {
  Button,
  H1,
  Paragraph,
  Separator,
  YStack,
} from 'tamagui'

export function HomeScreen() {

  return (
      <YStack>
        <YStack gap="$4">
          <H1>
            Bienvenue dans myTeam.
          </H1>
          <Separator />
          <Paragraph>
            Une application qui va vous faciliter la gestion de votre équipe.
          </Paragraph>
          <Separator />
        </YStack>

        <Button>Se Connecter</Button>
        <Button>S'inscrire</Button>
        <Button>Equipe démo</Button>
      </YStack>
  )
}