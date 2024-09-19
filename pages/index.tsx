import {
  Button,
  H1,
  Paragraph,
  Separator,
  YStack,
} from 'tamagui'
import { TextLink } from 'solito/link';
import Header from "app/features/header/index"

export function HomeScreen() {

  return (
    <>
      <Header />
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

        <Button><TextLink href="/connexion">Se Connecter</TextLink></Button>
        <Button><TextLink href="/inscription">S'inscrire</TextLink></Button>
        <Button><TextLink href="/team-demo">Equipe démo</TextLink></Button>
      </YStack>
    </>
  )
}