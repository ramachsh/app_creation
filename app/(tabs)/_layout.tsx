import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
      >
      <Tabs.Screen name="index" 
      options={{
        headerTitle: "Hello Organizer",
        tabBarIcon: ({focused,color}) => <Ionicons name={focused ? "home" : "home-outline"}
        size={30} color={color} />,
      }}
      />
      <Tabs.Screen name="about" 
      options={{
        headerTitle: "About"
      }}      
      />
      <Tabs.Screen name="not-found" 
      options={{
        headerShown: false,
      }}      
      />      
    </Tabs>
  );
}
