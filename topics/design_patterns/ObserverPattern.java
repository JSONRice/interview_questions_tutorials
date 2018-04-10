import com.sun.javafx.logging.Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.HashSet;
import java.util.Set;
import java.util.Collections;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

/**
 * The observer pattern is a software design pattern in which an object, called the subject, maintains
 * a list of its dependents, called observers, and notifies them automatically of any state changes,
 * usually by calling one of the methods. ~ Wikipedia
 *
 * The following is an example of the Observer Pattern also referred to as the Publisher-Subscriber Pattern.
 * This example employs a list of threads which act as observers and the main program execution which
 * contains the subject (also known as the publisher).
 */
public class ObserverPattern {

    public class Subscriber extends Thread {
        int id;

        public Subscriber() {
            super();
            this.id = 0;
        }

        public Subscriber(final int ID) {
            super();
            this.id = ID;
        }

        public void activate() {
            this.start();
        }

        @Override
        public void run() {
            System.out.printf("Subscriber #%d is activated.", this.id);
        }
    }

    private final ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
    protected final Lock readLock = readWriteLock.readLock();
    protected final Lock writeLock = readWriteLock.writeLock();


    // private List<Subscriber> subscribers = new ArrayList<Subscriber>();

/*    public void registerSubscriber(Subscriber subscriber) {
        // Lock the list of subscribers for writing
        this.writeLock.lock();

        try {
            this
        }

    }*/

    private final Object MONITOR = new Object();

    // A concurrent hash map is thread safe. Also notice that the set reference is final. This ensures
    // safe initialization and publication of the Set among different threads.
    private final Set<Subscriber> subscribers = Collections
            .newSetFromMap(new ConcurrentHashMap<Subscriber, Boolean>(0));

    public void registerSubscriber(Subscriber subscriber) {
        if (subscriber == null) return;

        synchronized (MONITOR) {
            if (subscribers.add(subscriber) && subscribers.size() == 1) {
                System.out.println("Added subscriber, now setting it to subscribe (listen) for published messages.");

            }
        }

        subscribers.add(subscriber);
    }

    public void unregisterSubscriber(Subscriber subscriber) {
        if (subscriber != null) {
            subscribers.remove(subscriber);
        }
    }

    private void activateSubscribers() {
        for (Subscriber subscriber : subscribers) {
            subscriber.activate();
        }
    }

    public static void main(String[] args) {
        System.out.println("I am free");

        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Slept for 10000 milliseconds.");
    }
}