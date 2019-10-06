export class Piece {
    
   IdPiece : number;  
      DesignP : string; 
      Poids : number; 
      Prix_p: number; 
      Qte_p: number ;

    getPrix (): number  {
      return this.Prix_p ; 
   } 
   getQte_p (): number {
      return this.Qte_p; 
   }
}