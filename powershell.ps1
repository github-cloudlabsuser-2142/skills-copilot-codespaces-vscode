# Connect to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "myResourceGroup"
$location = "eastus"
$storageAccountName = "mystorageaccount"
$skuName = "Standard_LRS"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName $skuName

# Output the storage account connection string
$storageAccount = Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName
$connectionString = $storageAccount.Context.ConnectionString
Write-Output "Storage account connection string: $connectionString"