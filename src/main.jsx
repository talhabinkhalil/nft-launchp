import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={"polygon"}
      supportedWallets={[metamaskWallet()]}
      authConfig={{
        domain: "nftmp.com",
        authUrl: "/api/auth",
      }}
      clientId="e282ef27db762b5acb9f8011b93b5b08"
      secretKey="O3lBn9Jl3IoQB0-7ZYyae61Gfqc7Apnyc2bxloLtvtlUeOGzQ1m_u3Q9FuWRWn_QPKTUEy3fpd_r1zUMDVtQ3g"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
