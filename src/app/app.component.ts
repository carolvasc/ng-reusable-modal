
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public matDialog: MatDialog) { }

  openLogoutModal() {
    const dialogConfig = new MatDialogConfig();
    // Não permite o fechamento do modal quando o usuário clicar fora do body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "logout",
      title: "Are you sure you want to logout?",
      description: "Pretend this is a convincing argument on why you shouldn't logout :)",
      actionButtonText: "Logout",
    }

    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  openDeleteProductModal() {
    const productId = "prod01";
    const dialogConfig = new MatDialogConfig();
    // Não permite o fechamento do modal quando o usuário clicar fora do body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "deleteProduct",
      title: "Are you sure you want to delete this product?",
      description: "If you continue, the product with ID " + productId + " will be deleted.",
      actionButtonText: "Delete",
      productId: productId
    }

    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}