import { Component } from '@angular/core';
import { SimpleCoreComponent1 as SimpleCoreComponentWithImplicitIndexInBarrelFile } from '@instriker/demolibraryforaot';
import { SimpleCoreComponent2 as SimpleCoreComponentWithExplicitIndexInBarrelFile } from '@instriker/demolibraryforaot';

@Component({
  selector: 'app-forums-without-index',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponentWithoutIndex extends SimpleCoreComponentWithImplicitIndexInBarrelFile {
}

@Component({
  selector: 'app-forums-with-index',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponentWithIndex extends SimpleCoreComponentWithExplicitIndexInBarrelFile {
}
