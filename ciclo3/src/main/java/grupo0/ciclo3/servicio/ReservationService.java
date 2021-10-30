
package grupo0.ciclo3.servicio;


import grupo0.ciclo3.modelo.Reservation;
import grupo0.ciclo3.modelo.custom.CountClient;
import grupo0.ciclo3.modelo.custom.StatusAmount;
import grupo0.ciclo3.repositorio.ReservationRepository;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
/**
*
*
* @author Sebastian Aldana
*/
public class ReservationService {
    @Autowired
    /**
    *Instancia del Repository de Reservation
    */
    private ReservationRepository reservationRepository;
    /**
    *Metodo que trae una lista con todos los registros
    */
    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }
    /**
    *Metodo que trae un registro por id
    */
    public Optional<Reservation> getReservation(int reservationId){
        return reservationRepository.getReservation(reservationId);
    }
    /**
    *Metodo que guarda el registro
    */
    public Reservation save(Reservation reservation){
        if(reservation.getIdReservation()==null){
            return reservationRepository.save(reservation);
        }else{
            Optional<Reservation> e= reservationRepository.getReservation(reservation.getIdReservation());
            if(e.isEmpty()){
                return reservationRepository.save(reservation);
            }else{
                return reservation;
            }
        }
    }
    /**
    *Metodo que actualiza un registro
    */
    public Reservation update(Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> e= reservationRepository.getReservation(reservation.getIdReservation());
            if(!e.isEmpty()){
                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                reservationRepository.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }
    /**
    *Metodo que elimina un registro por id
    */
    public boolean deleteReservation(int reservationId){
        Boolean aBoolean = getReservation(reservationId).map(reservation ->{
            reservationRepository.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    /**
    *Metodo que trae una lista con la cantidad de reservas en un tiempo determinado
    */
    public List<Reservation> getReservationsPeriod(String d1, String d2){
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOne = new Date();
        Date dateTwo = new Date();
        try {
            dateOne = parser.parse(d1);
            dateTwo = parser.parse(d2);
        }catch (ParseException e) {
            e.printStackTrace();
        }
        if(dateOne.before(dateTwo)){
            return reservationRepository.getReservationPeriod(dateOne,dateTwo);
        }else{
            return new ArrayList<>();
        }
    }
    /**
    *Metodo que trae una lista con el status de las reservas
    */
    public StatusAmount getStatusReport(){
        List<Reservation> completed = reservationRepository.getReservationsByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationsByStatus("cancelled");

        StatusAmount stsAmt = new StatusAmount(completed.size(),cancelled.size());
        return stsAmt;
    }
    /**
    *Metodo que trae una lista con el top de clientes con mas reservas
    */
    public List<CountClient> getTopClients(){
        return reservationRepository.getTopClients();
    }
    
}
