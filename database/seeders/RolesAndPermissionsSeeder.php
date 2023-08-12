<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin']);
        $sellerRole = Role::create(['name' => 'seller']);
        $userRole = Role::create(['name' => 'user']);


        $manageProducts = Permission::create(['name' => 'manage products']);
        $manageOrders = Permission::create(['name' => 'manage orders']);

        $adminRole->givePermissionTo($manageProducts);
        $sellerRole->givePermissionTo($manageProducts, $manageOrders);
    }
}
