import React, { createContext, useContext, useReducer } from 'react';

// Define the shape of our app state
interface AppState {
  language: 'hi' | 'kn' | 'ta' | 'bn' | 'te' | 'en';
  user: {
    name: string;
    phone: string;
    district: string;
    village: string;
    landArea: number;
    crops: string[];
    upiId: string;
    avatarUrl: string;
    totalSavings: number;
    ordersPlaced: number;
  } | null;
  activeOrder: {
    id: string;
    product: string;
    quantity: number;
    status: 'confirming' | 'clustering' | 'paying' | 'waiting' | 'confirmed' | 'in_transit' | 'delivered';
    cluster: ClusterState;
    vendor: VendorState;
    payment: PaymentState;
  } | null;
  orderHistory: Order[];
}

interface ClusterState {
  id: string;
  district: string;
  totalFarmers: number;
  joinedFarmers: number;
  requiredQty: number;
  filledQty: number;
  vendors: VendorState[];
  selectedVendor: VendorState | null;
}

interface VendorState {
  id: string;
  name: string;
  rating: number;
  distance: number;
  certs: string[];
  pricePerKg: number;
  deliveryDays: number;
  votes: number;
  totalVotes: number;
  recommended: boolean;
}

interface PaymentState {
  totalAmount: number;
  timeLeft: number; // in seconds
  paymentStatus: 'pending' | 'paid' | 'failed';
}

interface Order {
  id: string;
  product: string;
  quantity: number;
  vendor: string;
  amount: number;
  status: 'delivered' | 'shipped' | 'processing' | 'pending' | 'disputed';
  date: string;
  savings: string;
}

// Define action types
type AppAction =
  | { type: 'SET_LANGUAGE'; payload: 'hi' | 'kn' | 'ta' | 'bn' | 'te' | 'en' }
  | { type: 'SET_USER'; payload: AppState['user'] }
  | { type: 'SET_ACTIVE_ORDER'; payload: AppState['activeOrder'] }
  | { type: 'UPDATE_CLUSTER'; payload: ClusterState }
  | { type: 'ADD_TO_ORDER_HISTORY'; payload: Order };

// Initial state
const initialState: AppState = {
  language: 'en',
  user: null,
  activeOrder: null,
  orderHistory: [],
};

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ACTIVE_ORDER':
      return { ...state, activeOrder: action.payload };
    case 'UPDATE_CLUSTER':
      if (state.activeOrder) {
        return {
          ...state,
          activeOrder: {
            ...state.activeOrder,
            cluster: action.payload,
          },
        };
      }
      return state;
    case 'ADD_TO_ORDER_HISTORY':
      return {
        ...state,
        orderHistory: [...state.orderHistory, action.payload],
      };
    default:
      return state;
  }
};

// Create context
interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
