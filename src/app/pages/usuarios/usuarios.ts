import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios { }
