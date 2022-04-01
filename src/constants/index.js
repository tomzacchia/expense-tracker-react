import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export const categoriesMetadata = {
  transport: {
    pieChartColor: "1976d2",
    icon: DirectionsCarIcon,
  },
  food: {
    pieChartColor: "9c27b0",
    icon: LocalDiningIcon,
  },
  general: {
    pieChartColor: "ef5350",
    icon: LocalOfferIcon,
  },
  home: {
    pieChartColor: "2e7d32",
    icon: HomeIcon,
  },
  shopping: {
    pieChartColor: "0288d1",
    icon: ShoppingCartIcon,
  },
  payment: {
    pieChartColor: "ed6c02",
    icon: CreditCardIcon,
  },
  eletronics: {
    pieChartColor: "01579b",
    icon: PhoneIphoneIcon,
  },
  gift: {
    pieChartColor: "gift",
    icon: CardGiftcardIcon,
  },
  default: {
    pieChartColor: "default",
    icon: LocalOfferIcon,
  },
};
