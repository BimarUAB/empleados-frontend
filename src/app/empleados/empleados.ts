import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule], // Necesarios para *ngFor y ngModel
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0 };

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadosService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  agregarEmpleado(): void {
    this.empleadosService.createEmpleado(this.nuevoEmpleado).subscribe(() => {
      this.cargarEmpleados();
      this.nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0 };
    });
  }
}