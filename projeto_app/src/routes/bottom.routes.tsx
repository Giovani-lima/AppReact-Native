import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import CarneVermelha from '../pages/CarneVermelha';
import Frango from '../pages/Frango';
import Peixe from '../pages/Peixe';
import Massas from '../pages/Massas';
import Sobremesas from '../pages/sobremesas';
import Hamburguer from '../pages/Hamburguer';
import Drinks from '../pages/Drinks';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false
      }}
      tabBar={pros=><CustomTabBar {...pros}/>}
    >
    <Tab.Screen 
        name="Tela1" 
        component={CarneVermelha} 
    />
    <Tab.Screen 
        name="Tela2" 
        component={Frango} 
    />
    <Tab.Screen 
        name="Tela3" 
        component={Peixe} 
    />
    <Tab.Screen 
        name="Tela4" 
        component={Massas} 
    />
    <Tab.Screen 
        name="Tela5" 
        component={Sobremesas} 
    />
    <Tab.Screen 
        name="Tela6" 
        component={Hamburguer} 
    />
    <Tab.Screen 
        name="Tela7" 
        component={Drinks} 
    />
    </Tab.Navigator>
  );
}