type EthAddress = String;

class AccountService {
    hasEthereumApi(): Boolean {
        return false;
    }
    getAccounts(): EthAddress[] {
        return [];
    }
}
