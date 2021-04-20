import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ComponentScreen from "./src/screens/ComponentScreen"
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen"
import SquareScreen from "./src/screens/SquareScreen"
import SquareScreenWithReducer from "./src/screens/SquareScreenwithreducer"
import TextScreen from "./src/screens/TextScreen"
import TextScreenWithValidation from "./src/screens/TextWithValidation"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareWR: SquareScreenWithReducer,
    TextInput: TextScreen,
    TextValidation: TextScreenWithValidation,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
)

export default createAppContainer(navigator)
