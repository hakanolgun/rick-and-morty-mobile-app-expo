import {Stack} from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="index" options={{title: 'Episodes'}} />
      <Stack.Screen name="episode" options={{title: 'Episode'}} />
    </Stack>
  );
}
